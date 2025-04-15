  
var kusamaColours=[[255, 205, 0], "orange", "lightgrey", "lightgreen", "purple", "lightblue", "lightred"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("pink");
  noStroke();
  frameRate(4);
}
function draw() {
  fill (random(kusamaColours));
  circle(random(width), random(height), random(60, 300));
}
function mousePressed(){
  background("pink");
}
 
