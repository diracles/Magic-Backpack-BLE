PImage photo, maskImage;

void setup() {
  size(1000, 1000);
  photo = loadImage("test.jpg");
  maskImage = loadImage("mask.jpg");
//  color c = color(0,126,255,102);
//  photo.mask(maskImage);
}

void draw() {
   tint(0, 153, 204, 126); 
  image(photo, 0, 0);

//  image(maskImage, 0, 0, 0, 0);
}
