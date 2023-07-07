(async function () {

    // Display images before and after processing
    const elementDarkVideo = document.getElementById("dark-video");  
    const elementLightVideo = document.getElementById("light-video"); 
    const canvasCtx = elementLightVideo.getContext("2d");

    const streamWidth = 840;
    const streamHeight = 564;
    const scaledWidth = Math.floor(streamWidth / 12) * 12;
    const scaledHeight = Math.floor(streamHeight / 12) * 12;

    console.log("scaledWidth: ", scaledWidth);
    console.log("scaledHeight: ", scaledHeight);

    elementLightVideo.width = scaledWidth;
    elementLightVideo.height = scaledHeight;

    // Default executionProviders => ['wasm']
    const session = await ort.InferenceSession.create('sgz.onnx');
    //const session = await ort.InferenceSession.create('sgz.onnx', { executionProviders: ['webgl'], graphOptimizationLevel: 'all' });
    console.log('Inference session created');

    // Acquire stream from a camera
    const localMediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: streamWidth,
        height: streamHeight,
        frameRate: 15,
      },
      audio: false,
    });
    elementDarkVideo.srcObject = localMediaStream

    // Prepare media stream track processer to acquire a media stream trach
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackProcessor
    const processor = new MediaStreamTrackProcessor(
      localMediaStream.getVideoTracks()[0]
    );

    // Prepare witable stream
    const writable = new WritableStream({
  
      async write(videoFrame) {

        const dims = [1, 3, scaledHeight, scaledWidth];
        console.time("total")

        // Convert data architecture to inference
        const imageTensor = await image2Tensor(videoFrame, streamWidth, streamHeight, dims);

        // Execute Low Light Image Enhancement
        const results =  await runInference(session, imageTensor);

        // Convert data architecture to display
        const enhancedFrame = await tensor2Image(results, dims);
        
        // Draw enhanced image to browser
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, elementLightVideo.width, elementLightVideo.height);
        canvasCtx.putImageData(enhancedFrame, 0, 0);
        
        console.timeEnd("total")

        videoFrame.close();
      },
      // Event handlers
      start() {
        console.log("WritableStream started");
      },
      stop() {
        console.log("WritableStream stopped");
      },
      close() {
        console.log("WritableStream closed");
      },
      abort(reason) {
        console.log("WritableStream aborted: ", reason);
      }
    });

    // Connect pipeline from readable to writable
    processor.readable.pipeTo(writable);

})();


// Convert VideoFrame to Tensor so that ONNX runtime can handle.
//   A. YUV (I420/NV12)  ->  RGBA
//   B. [Width, Height, channel]             ->  [batch, channel, Width, Height]
//       ( [R,G,B,A],[R,G,B,A],[R,G,B,A],..  ->  [R,R,R,..],[G,G,G,..],[B,B,B,...] )
//   C. uint8  ->  float32
async function image2Tensor(videoFrame, streamWidth, streamHeight, dims){

  console.time("preProcess");

  // 1. Convart VideoFrame to ImageBitmap and pass into canvas. (A)
  const imageBitmap = await createImageBitmap(videoFrame);
  const canvas = new OffscreenCanvas(1,1);    // needs an initial size
  const ctx = canvas.getContext("2d");
  canvas.width = streamWidth;
  canvas.height = streamHeight;

  ctx.drawImage(imageBitmap, 0, 0);

  // 2. Get image data from canvas as ImageData. (A)
  const imageBufferData = ctx.getImageData(0, 0, dims[3], dims[2]).data;

  // 3. Separate color to each color array. (B) and uint8 -> float32 (C)
  const float32Data = new Float32Array(dims[1] * dims[2] * dims[3]);
  for (let i = 0; i < imageBufferData.length / 4; i++) {
    float32Data[i] = imageBufferData[i * 4] / 255.0; // R
    float32Data[i + dims[2] * dims[3]] = imageBufferData[i * 4 + 1] / 255.0; // G
    float32Data[i + dims[2] * dims[3] * 2] = imageBufferData[i * 4 + 2] / 255.0; // B
  }

  // 6. Create the tensor object from onnxruntime-web.
  const inputTensor = new ort.Tensor("float32", float32Data, dims);

  console.timeEnd("preProcess");

  return inputTensor;
}


// Execute the inference with LLIE model.
async function runInference(session, imageTensor){

  console.time("inference");

  // Create feeds with the input name from model export and the preprocessed data.
  const feeds = { modelInput: imageTensor };
  
  // Run the session inference.
  const outputData = await session.run(feeds);
  const output = outputData[session.outputNames[0]];
        
  console.timeEnd("inference");

  return output;

}


// Convert Tensor to ImageData so that browser can draw.
//   A. float32  ->  uint8
//   B. [batch, channel, Width, Height]  ->  [Width, Height, channel]
//       ( [R,R,R,..],[G,G,G,..],[B,B,B,...]  ->  [R,G,B,A],[R,G,B,A],[R,G,B,A],.. )
async function tensor2Image(result, dims){

  console.time("postProcess");

  // 1. Convert to int8. (A)
  // 2. Pass around RGB to transpose [3, width, height] -> [width, height, 3] to a number array. (B)
  const transposedData = new Uint8ClampedArray(4 * dims[2] * dims[3]);
  let j = 0
  for (let i = 0; i < result.data.length / 3; i++){
    transposedData[j++] = result.data[i] * 255.0;
    transposedData[j++] = result.data[i + (result.data.length / 3)] * 255.0;
    transposedData[j++] = result.data[i + (2 * result.data.length / 3)] * 255.0;
    transposedData[j++] = 255;  // the alpha channel filled with 255 (nontransparent)
  }

  // 3. Create ImageData to draw with canvas.
  const imageData = new ImageData(transposedData, dims[3]);

  console.timeEnd("postProcess");

  return imageData;

}


