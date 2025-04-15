function setup() {
createCanvas(windowWidth, windowHeight);
}


function draw() {
line(mouseX, mouseY, pmouseX, pmouseY)
stroke("pink");
strokeWeight(5);
}

function mousePressed(){
  background(random(256), random(256), random(256));
}
