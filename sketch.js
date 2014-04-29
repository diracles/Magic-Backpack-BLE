// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var mover;

function setup() {
  createCanvas(640,360);
  mover = new Mover(); 
  img =loadImage("img/desert.png");
  img2 = loadImage("img/ant.png");
  console.log("img2");
}

function draw() {
  // background(51);
  pushMatrix();
  imageMode(CENTER);
  image(img2, 360, 240);
  popMatrix();

  
  mover.update();
  mover.checkEdges();
  mover.display(); 
}

