canvas = createCanvas(1231,748);
  mover = new Mover(); 


  // img = createHTMLImage("http://stateofrelationships.com/wp-content/uploads/2014/05/desert_night.png");
  
// Here we call methods of each element to set the position and id.
  // Use view-source to look at the HTML generated from this code when you load the sketch in your browser.
  // img.position(0, 0);
  // img.size(width, height);
  // // Attach listeners for mouse events related to img.
  // img.mousePressed(uniHide);




function setup() {

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
  imageMode(CENTER);
  image(backdrop2, 400, 400, width, height);
  //tint(255,126);
  image(backdrop, 400, 400, width, height);
  image(img2, 1231, 748);
    //somehow changing this got rid of 2nd ant 

  mover.update();
  mover.checkEdges();
  mover.display(); 

}
