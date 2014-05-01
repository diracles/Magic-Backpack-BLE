// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var mover;
// var mySound = new buzz.sound("/audio/owl.ogg", {
//     formats: [ "ogg", "mp3", "aac", "wav" ],
//     preload: true,
//     autoplay: true,
//     loop: false
// });


var canvas;
var img2;
var backdrop;
var backdrop2;
var color;
var ctx;
var img;
var alphaVariable = 1;

var radius=60;
var smoothAmount;
var canvasImg; 


var event = new Event("audioGo");

event.which=0;

function audioBun(event) {

var key = (event) ? event.which : event.keyCode;
if (String.fromCharCode(key)=="g"){

  document.getElementById('myaudio').play();
  console.log("Im in the audio function");

}
else if (String.fromCharCode(key)=="h"){

  document.getElementById('myaudio').pause();
  console.log("Im in the audio function");

}

}


var compositeTypes = [
  'source-over','source-in','source-out','source-atop',
  'destination-over','destination-in','destination-out',
  'destination-atop','lighter','darker','copy','xor'
];


function setup() {
  canvas = createCanvas(1231,748);
  mover = new Mover(); 


  // img = createHTMLImage("http://stateofrelationships.com/wp-content/uploads/2014/05/desert_night.png");
  
// Here we call methods of each element to set the position and id.
  // Use view-source to look at the HTML generated from this code when you load the sketch in your browser.
  // img.position(0, 0);
  // img.size(width, height);
  // // Attach listeners for mouse events related to img.
  // img.mousePressed(uniHide);


  backdrop =loadImage("img/desert_day.png");
  backdrop2 =loadImage("img/desert_night.png");

  img2 = loadImage("img/ant.png");
  console.log("img2 in setup");

  // backdrop.mousePressed(uniHide);

  canvas.position(0,0);

  // backdrop.blend(backdrop,0,0,backdrop2.width, backdrop2.height, 0, 0, backdrop2.width, backdrop2.height, "burn" );
  // image(backdrop2, 250, 10);
}

function draw() {

  context(canvas);
  rect(0,0, width, height);

  imageMode(CENTER);
  //image(backdrop2, 400, 400, width, height);
  //tint(255,126);
  fill(0,alphaVariable); 
  

  image(backdrop, 400, 400, width, height);
  image(img2, 1231, 748);

    //somehow changing this got rid of 2nd ant 

  mover.update();
  mover.checkEdges();
  mover.display(); 



  if ((alphaVariable >= 255) || (alphaVariable <= 0)) {
    alphaVariable *= -1;
  } 
 


  //   for (var y=0 ; y<height; y++) {
  //   for (var x=0; x<width; x++) {
  //     if (pow((x-mouseX), 2)+ pow((y-mouseY), 2)<pow(radius, 2))  {
  //       pixels[y*width+x] = img.get(x, y);
  //     }
  //   }
  // }
  // updatePixels();

}


function uniHide(){
  // img.hide();

}


function uniShow(){
  // img.show();
}

function mousePressed(){
  uniHide();
    alphaVariable+=1;

  // backdrop.tint(0, 153, 204, 126);
  background(200);
}




function keyPressed() {
  console.log("key is pressed");
  // tint();
  console.log("tint is here");








  
  // Using the third-party library to call play() on the buzz object
  mySound.play();
}







