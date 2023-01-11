// draws an arbitrary sine wave
function setup() {
  createCanvas(windowWidth, windowHeight);
  let x = 0;
  let y = 0;
  let theta = 0;
  background(0);
  noStroke();
  fill(255);
  while (theta < TWO_PI) {
    y = sin(theta) * 200;
    ellipse(x, height / 2 +y, 16, 16);
    theta += 0.2;
    x += 20;
  }
}