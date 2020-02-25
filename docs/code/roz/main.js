
let myCapture;

function setup() {
  let canvas = createCanvas(640, 480);
 // canvas.parent("sketch");
  myCapture = createCapture(VIDEO);
  myCapture.size(320,240);
  myCapture.hide();
//  fill(0);
}

function draw() {
  background(0,255,0);
  //loading pixel data into myCapture object
  myCapture.loadPixels();
  noStroke();
  
  const stepSize = round(constrain(mouseX/8, 6, 64));
  
  for(let y = 0; y < height;  y += stepSize)
  {
    for(let x = 0 ; x < width; x += stepSize)
    {
      const i = y*width + x;
      const darkness = (255 - myCapture.pixels[i*4])/2;   
      const radius = stepSize*darkness;
      
      push();
      translate(width,0);
      scale(-1,1);
      
      
      rect(x,y,radius,radius);
     // rotate();
      pop();
      fill(random(255),random(255),random(0));
    }
  }
}
/** 
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  rect(50,50,45,45);
}**/