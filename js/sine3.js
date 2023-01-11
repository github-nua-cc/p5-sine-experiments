
// using loops to render multiple waves with decreasing colour values
let offset = 0;
function setup() {
  // frameRate(20);
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  let amplitude = windowHeight / 4;
  let frequency = windowWidth / 2;
  let x = 0;
  let y = 0;
  let maxAngle = (windowWidth / frequency) * TWO_PI;
  let theta = offset;
  background(0);
  noStroke();
  
  while (theta < maxAngle + offset) {
    let length = 20;
    let size = 1;
    amplitude = ((theta - offset) / maxAngle) * windowHeight/2
    for(let i = length ; i > 0; i--){
      y = sin(theta - (i * 0.05)) * amplitude;
      fill(255 - (255/length * i), 0, 0);
      // ellipse(x, height / 2 + y, 16, 16);
      square(x, height / 2 + y, 16)
    }
    for(let i = length ; i > 0; i--){
      y = cos(theta - (i * 0.05)) * amplitude;
      fill(0, 255 - (255/length * i), 0);
      // ellipse(x, height / 2 + y, 16, 16);
      square(x, height / 2 + y, 16)
    }
    theta += 0.2;
    x = ((theta - offset) / maxAngle) * windowWidth;
  }
  offset += .025;
  if (offset > TWO_PI) {
    offset = 0;
  }
}
