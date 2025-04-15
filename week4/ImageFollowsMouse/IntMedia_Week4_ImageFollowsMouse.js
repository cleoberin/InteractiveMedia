var pic;
 
function preload(){
pic=loadImage("silverflower.png");
}
function setup() {
createCanvas(windowWidth, windowHeight);
background("pink");
imageMode(CENTER, CENTER);
}
function draw() {
scale(1);
image(pic, mouseX/1, mouseY/1);
}
function mousePressed(){
  background("pink");
}
 
