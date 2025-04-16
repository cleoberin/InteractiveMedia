var soundFile;
var amplitude;

var backgroundColor;
var cnv, fft, peakDetect;

const sentence = "Oh dar ling ... please bel ieve me ... I'll ne ver do you no harm aaaaa aaaa aaaa aaaa bel ieve me when I tell you I'll ne ver do you no harm ! ? @ # % * & % ? + &".split(' ')

let i = 0;

function preload() {
  soundFile = loadSound('./Oh!Darling!.mp3');
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);

  textSize(windowWidth / 5);

  backgroundColor = color(random(0, 255), random(0, 255), random(0, 255));

  amplitude = new p5.Amplitude();

  amplitude.setInput(soundFile);
  amplitude.smooth(0.9);

  fft = new p5.FFT();
  peakDetect = new p5.PeakDetect();
}

function draw() {
  background(backgroundColor);

  fft.analyze();
  peakDetect.update(fft);

  if (peakDetect.isDetected) {
    onBeat();
  }
  textAlign(CENTER, CENTER);
  text(sentence[i], windowWidth / 2, windowHeight / 2);
  fill('yellow');
}

let beatCounter = 0;
const changeOnBeat = 1;

function onBeat() {
  beatCounter++;

  if (i % sentence.length === 0) {
    i = 0;
  }

  if (beatCounter % changeOnBeat === 0) {
    i++;
  }

  backgroundColor = color(random(0, 255), random(0, 255), random(0, 255));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function mousePressed() {
  // Start or stop the song when the mouse is pressed
  if (soundFile.isPlaying()) {
    soundFile.stop();
  } else {
    soundFile.play();
  }
}
