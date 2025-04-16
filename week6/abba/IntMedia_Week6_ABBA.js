let mic;
let song;

function preload() {
  song = loadSound('./KnowingMeKnowingYou.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // Subtle, changing background with transparency
  let t = random(0, 30);
  let b = random(0, 40);
  let u = random(100, 255);
  background(0, t, b, 20);

  let vol = mic.getLevel(); // ~0.0 to ~0.3
  let size = map(vol, 0, 0.4, 60, 500); // Keep size within a viewable range

  // Styling for ellipses
  noFill();
  stroke("lightBlue");
  strokeWeight(random(1, 3));

  // Centered responsive circles
  ellipse(width / 2, height / 2, size, size);
  ellipse(width / 2, height / 2, size * 1.5, size * 0.7);
  
  fill(173, 216, 230); 
  noStroke();
  textSize(32);
  textAlign(LEFT, TOP);
  text("Click to Play: Knowing Me, Knowing You", 20, 20);
  
  fill(173, 216, 230); 
  noStroke();
  textSize(32);
  textAlign(LEFT, BOTTOM);
  text("Drum along.", 20, height -20);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
