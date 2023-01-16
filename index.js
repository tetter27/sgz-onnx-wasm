// ToDo: 本当は入力のwidthとheightを12の倍数になるようにトリミングしなければならない
(async function () {

    const elementDarkVideo = document.getElementById("dark-video");
    const elementLightVideo = document.getElementById("light-video");
    const canvasCtx = elementLightVideo.getContext("2d");

    const streamWidth = 840;
    const streamHeight = 564;

    // default ['wasm']
    const session = await ort.InferenceSession.create('sgz.onnx');
    //const session = await ort.InferenceSession.create('sgz.onnx', { executionProviders: ['webGl'] });
    console.log('Inference session created');

    const localMediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: streamWidth,
        height: streamHeight,
        frameRate: 15,
      },
      audio: false,
    });
    elementDarkVideo.srcObject = localMediaStream
    elementDarkVideo.play()

    const processor = new MediaStreamTrackProcessor(
      localMediaStream.getVideoTracks()[0]
    );
    const writable = new WritableStream({
      start() {
        console.log("WritableStream started")
      },
      async write(videoFrame) {

        const total_start = new Date();

        const imageTensor = await image2Tensor(videoFrame, streamWidth, streamHeight)

        const inference_start = new Date();
        const results =  await runInference(session, imageTensor);
        const inference_end = new Date();
        const inferenceTime = (inference_end.getTime() - inference_start.getTime())/1000;

        const lightImage = await tensor2Image(results, streamWidth, streamHeight);

        const total_end = new Date();
        const totalTime = (total_end.getTime() - total_start.getTime())/1000;

        console.log("inferenceTime: " + inferenceTime + "s")
        console.log("totalTime: " + totalTime + "s")
        
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, elementLightVideo.width, elementLightVideo.height);
        canvasCtx.putImageData(lightImage, 0, 0);
        
        videoFrame.close()
      },
      stop() {
        console.log("WritableStream stopped")
      },
    });
    processor.readable.pipeTo(writable)

})();


async function image2Tensor(videoFrame, streamWidth, streamHeight){

  const dims = [1, 3, streamWidth, streamHeight];
  // 1. Get buffer data from image and create R, G, and B arrays.
  //let imageBufferData = await getImageBufferDataRGB(videoFrame, dims)

  const imageBitmap = await createImageBitmap(videoFrame);
  const canvas = new OffscreenCanvas(1,1);    // needs an initial size
  const ctx = canvas.getContext("2d");
  canvas.height = streamHeight;
  canvas.width = streamWidth;
  ctx.drawImage(imageBitmap, 0, 0);
  var imageBufferData = ctx.getImageData(0, 0, streamWidth, streamHeight).data;

  //console.log(imageBufferData)

  const [redArray, greenArray, blueArray] = new Array(new Array(), new Array(), new Array());

  // 2. Loop through the image buffer and extract the R, G, and B channels
  for (let i = 0; i < imageBufferData.length; i += 4) {
    redArray.push(imageBufferData[i]);
    greenArray.push(imageBufferData[i + 1]);
    blueArray.push(imageBufferData[i + 2]);
    // skip data[i + 3] to filter out the alpha channel
  }

  // 3. Concatenate RGB to transpose [224, 224, 3] -> [3, 224, 224] to a number array
  const transposedData = redArray.concat(greenArray).concat(blueArray);

  // 4. convert to float32
  let i, l = transposedData.length; // length, we need this for the loop
  // create the Float32Array size 3 * 224 * 224 for these dimensions output
  const float32Data = new Float32Array(dims[1] * dims[2] * dims[3]);
  for (i = 0; i < l; i++) {
    float32Data[i] = transposedData[i] / 255.0; // convert to float
  }
  // 5. create the tensor object from onnxruntime-web.
  const inputTensor = new ort.Tensor("float32", float32Data, dims);

  return inputTensor;

}


async function runInference(session, imageTensor){

    // create feeds with the input name from model export and the preprocessed data.
    const feeds = { modelInput: imageTensor };
    // Run the session inference.
    const outputData = await session.run(feeds);
    const output = outputData[session.outputNames[0]];

    return output
}


async function getImageBufferDataRGB(videoFrame, dims){

  if(videoFrame.format !== 'NV12'){
    alert("this format is not supported: " + videoFrame.format);
    return null;
  }
  else if(videoFrame.format === 'NV12'){
    let imageBufferDataNV12 = new Uint8Array(dims[1] * dims[2] * dims[3]);
    let imageBufferDataRGB = new Uint8Array(dims[1] * dims[2] * dims[3]);
    await videoFrame.copyTo(imageBufferDataNV12);

    for(let i = 0; i < imageBufferDataRGB.length; i += 3){
      imageBufferDataRGB[i] = parseInt( 1.164*(imageBufferDataNV12[i]-16) + 1.596*(imageBufferDataNV12[i+2]-128) )
      imageBufferDataRGB[i+1] = parseInt( 1.164*(imageBufferDataNV12[i]-16) - 0.813*(imageBufferDataNV12[i+2]-128) - 0.391*(imageBufferDataNV12[i+1]-128) )
      imageBufferDataRGB[i+2] = parseInt( 1.164*(imageBufferDataNV12[i]-16) + 2.018*(imageBufferDataNV12[i+1]-128) )
    }

    return imageBufferDataRGB
  }
}


async function tensor2Image(result, streamWidth, streamHeight){

  const dims = [1, 3, streamWidth, streamHeight];

  const int8Data = new Uint8Array(dims[1] * dims[2] * dims[3]);
  for (let i = 0; i < result.data.length; i++) {
    int8Data[i] = parseInt(result.data[i] * 255); // convert to int
  }

  const transposedData = new Array();

  for (let i = 0; i < int8Data.length / 3; i++){
    transposedData.push(int8Data[i]);
    transposedData.push(int8Data[i + (int8Data.length / 3)]);
    transposedData.push(int8Data[i + (2 * int8Data.length / 3)]);
    transposedData.push(255);
  }

  const uint8Data = new Uint8ClampedArray(transposedData);
  const imageData = new ImageData(uint8Data, streamWidth);

  return imageData;

}




