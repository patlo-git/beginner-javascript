/* eslint-disable */

// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

const faceDetector = new FaceDetector();
const optionsInputs = document.querySelectorAll('.controls input[type="range"]');


// slider
const options = {
  SIZE: 10,
  SCALE: 1.55,
}

function handleOption(event) {
  const { value, name } = event.currentTarget;
  // inputs always come in as strings
  // so change to numbers using parseFloat
  options[name] = parseFloat(value);
}

// event listener for the sliders
// input event will fire when it's changed
optionsInputs.forEach(input => input.addEventListener('input', handleOption));
// console.log(video, canvas, faceCanvas, faceDetector);

// Write a function that will populate the user's video

// in order for us to wait for the stream to come back from webcam, b/c of the promise, we use async
async function populateVideo() {
  // grab the stream from the user's webcam
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 720, height: 480 }
  });
  video.srcObject = stream;
  // awaiting for the video to play allows it to set the size of the canvases
  await video.play();
  // size the canvases to be the same size as the video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

// face detection api
async function detect() {
  // detect faces in the shot
  // pass reference to either an image, a video, or a canvas
  const faces = await faceDetector.detect(video);
  // console.log(faces.length);
  // ask browser when the next animation frame is, and tell it to run detect for us
  faces.forEach(drawFace);
  faces.forEach(censor);
  // forEach face found it will log the face
  requestAnimationFrame(detect);
}

function drawFace(face) {
  // getting location of the face
  // x and y are the same as left and top
  // right is x + width
  const { width, height, top, left } = face.boundingBox;
  // clear the w and height starting from top left corner every time it runs
  // it clears the canvas for us
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  // api for drawing a rectangle
  ctx.strokeRect(left, top, width, height);
}

// censor the bounding box
function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  // resets or clears it each time
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // draw the small face back on, but scaled up
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    // 5 source args - how we pull data out
    video, // where does the source come from?
    face.x, // where do we start the source come from?
    face.y,
    face.width, // how wide and high does it need to go?
    face.height,
    // 4 draw args - how we paint it into
    face.x, // where should we start drawing the x and y?
    face.y,
    // set the size of the image to resize
    options.SIZE, // how wide and high should I paint it to?
    options.SIZE,
  );
  // draw the small face back on, but scaled up to be pixelated
  faceCtx.drawImage(
    faceCanvas, // source
    face.x, // where do we start the source come from?
    face.y,
    options.SIZE,
    options.SIZE,
    // Drawing args
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
  // boundingBox;
}
populateVideo().then(detect);
