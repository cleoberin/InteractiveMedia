let video;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch-holder'); 
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide(); 
}

function draw() {
  image(video, 0, 0, width, height);
  filter(INVERT); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
