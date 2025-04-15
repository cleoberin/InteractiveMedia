var kusamaColours=[[255, 205, 0], "orange", "lightgrey", "lightgreen", "purple", "lightblue", "lightred"];
function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(1);
}
function draw() {
stroke(0);
strokeWeight(4);
stroke("lightblue");
background("pink");
for (let i=0; i<20; i++) {
fill (random(kusamaColours));
circle(random(width), random(height), random(60, 300));
fill (random(kusamaColours));
rect(random(width), random(height), random(60, 200), random(60, 300));
}
}
 
