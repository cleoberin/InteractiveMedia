var song; //initiating our variable
var analyzer;
function preload() {
 song = loadSound ('./DontDreamItsOver.mp3'); 
}

function setup() {
  //song = loadSound ('data/beat.mp3'); //associate our sound to the variable 'song'
  createCanvas (windowWidth, windowHeight); // create full window canvas
  background("red");
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fill("green");
  textSize(72);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(0, 10);
  fill("pink");
  var volume = analyzer.getLevel();
  volume*=400;
  //ellipse(width/2,height/2,volume,volume);
  fill("red");
  textSize(volume*2);
  translate(width/2,height/2);
  textX=map(volume, 0, 400, 0, windowWidth);
  textY=map(volume, 0, 400, 0, windowHeight);
  rotate(volume);
  text('dont dream its over', 0, 0);
}
function draw() {
  background(0, 10);
  fill("pink");
  var volume = analyzer.getLevel();
  volume*=400;
  //ellipse(width/2,height/2,volume,volume);
  fill("red");
  textSize(volume*2);
  translate(width/2,height/2);
  textX=map(volume, 0, 400, 0, windowWidth);
  textY=map(volume, 0, 400, 0, windowHeight);
  rotate(volume);
  text('im dreaming its over', 0, 0);
  
   push();
  translate(width / 4, height / 2); // Halfway between left edge and center
  rotate(volume);
  text('don’t dream it’s over', 0, 0);
  pop();
  
  push();
  translate(3 * width / 4, height / 2);
  rotate(volume);
  text('dont dream its over', 0, 0);
  pop();
}

function mousePressed() {
  if (song.isPlaying()) {
    background(255);
    song.stop(); // if the song is playing, stop it
    song.noLoop();
  }
  else {
    background(0);
    song.loop();
    song.play(); 
  }
}
