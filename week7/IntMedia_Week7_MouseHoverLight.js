let r = 20;
let spacing = 50; 
let cols, rows;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  stroke('grey');

  cols = floor(width / spacing);
  rows = floor(height / spacing);
} 

function draw() { 
  background('white');
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacing + spacing / 2;
      let y = j * spacing + spacing / 2;
      
      if (dist(x, y, mouseX, mouseY) < r) {
        fill('red');
      } else {
        fill('white');
      }
      
      ellipse(x, y, r * 2, r * 2);
    }
  }
}
