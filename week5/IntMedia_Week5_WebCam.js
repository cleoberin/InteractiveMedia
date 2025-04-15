let capture;
function setup() {
  createCanvas (500, 700);
  background(0, 0, 255);
  capture=createCapture(VIDEO);
  capture.hide(200, 140);
}


function draw() {
filter(THRESHOLD);
image(capture, mouseX, mouseY, 80, 60);
}
