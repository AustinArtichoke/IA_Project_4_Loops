function setup() {
  createCanvas(1670,850);
  background(250, 240, 230);
}

function draw() {
  // set framerate for drawing
  frameRate(3);

 // set i variable for scale - changes width of triangle
  let i = 60;

   // create loops for x position and y position, adding values for shifting position
  for (let x = 22; x <= width-i*3; x +=i*2) {
    for (let y = 122; y <= height-i; y +=i*2) {
      // set color R=random range, G=random range, B=mouse y position, and alpha to mouse x position
      noStroke();
      fill (random(100,255), random(100,200), mouseX/6, 255);
      // draw downward triangles scaled based on i value
      // height determined by mouse y position
      triangle (x, y, x+i*2, y, x+i,(y+mouseY/8));
      // changing the fill of the upright triangles to slightly lighter pallette (higher random R and G values)
      fill (random(200,255), random(150,220), mouseX/6, 255);
      // draw upright triangles
      triangle (x+i, y, x+i*3, y, x+i*2, (y-mouseY/8));
    }
  }

}
//saves a gif of the sketch (press 's') or clear the drawing (press 'c')
function keyPressed(){
  if (key === "s") {
    saveGif ("Project4", 5);
  } else if (key === "c") {
    clear();
  } else {

  }
}
  


