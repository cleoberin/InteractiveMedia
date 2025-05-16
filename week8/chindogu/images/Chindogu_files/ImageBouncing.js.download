
let feet;

let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = -1;

function preload() {
  feet = loadImage('chindogufeet.png');
}

function setup() {
  clear();
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch-holder'); 
}

function draw() {
  clear();
  image(feet, x, y, 200, 160);
  
  x = x + xspeed;
  y = y + yspeed;
  
  if (x < 0 || x > width - 100) {
    xspeed = -xspeed;    
  }

  if (y < 0 || y > height - 160) {
    yspeed = -yspeed;    
  }

  
  
}
