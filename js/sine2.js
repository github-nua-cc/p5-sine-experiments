
//specify amplitude and frequency of the sine wave and animate it
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
    // try modulating the wave amplitude using these values
    // amplitude = sin(theta - offset) * (windowHeight/2);
    // amplitude = ((theta - offset) / maxAngle) * windowHeight/2
    y = sin(theta) * amplitude;
    fill(255, 0, 0);
    ellipse(x, height / 2 + y, 16, 16);
    // try viusalising a cosine wave
    // y = cos(theta) * amplitude;
    // fill(0, 0, 255);
    // ellipse(x, height / 2 + y, 16, 16);
    theta += 0.2;
    x = ((theta - offset) / maxAngle) * windowWidth;
  }
  offset += .05;
  if (offset > TWO_PI) {
    offset = 0;
  }
}