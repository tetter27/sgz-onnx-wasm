:warning: Current code does not work.

# SGZ-ONNX-WASM
Convert SGZ model for Low Light Image Enhancement to ONNX and run it in the browser.  
Eventually, it will be adopted WebRTC to be able to transmit enhanced images.

## Get Started
### Dependencies
* node
* An arbitrary OS
* An arbitrary browser
* An arbitrary web camera

### Executing program
Go to the SGZ-ONNX-WASM directory and execute the following command.
```
npx light-server -s . -p 8080
```
After the command works, access localhost:8080 in a browser.

### Loadmap
- [x] Convert to ONNX
- [x] Run on a browser
- [x] Proofread comments
- [ ] Support TypeScript + next.js
- [ ] Crop the input image so that its height and width are multiples of scale factor (i.e. 12)
- [ ] Modify a little collapse of layout if it exists yet
- [ ] Optimize data transformation arround the inference process
- [ ] Support WebRTC to transmit enhanced images

## Authors
tetter

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Reference
Semantic-Guided-Low-Light-Image-Enhancement  
https://github.com/ShenZheng2000/Semantic-Guided-Low-Light-Image-Enhancement
