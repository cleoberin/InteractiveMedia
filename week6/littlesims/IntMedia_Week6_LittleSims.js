let mic;
let song;

function preload() {
  song = loadSound('./FearNoMan.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel() * 50;

  background("orange"); 

  // particle ellipses
  for (let i = 0; i < 10; i++) {
    let x = random(-width/2, width/2);
    let y = random(-height/2, height/2);
    let r = vol * random(10, 50);
    noStroke();
    fill(0);
    ellipse(width/2 + x, height/2 + y, r);
  }

 
  translate(width / 2, height / 2);
  fill(0); 
  scale(max(1, vol), max(1, vol));
  textSize(100);
  textAlign(CENTER, CENTER);
  text('FEAR NO MAN', 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
