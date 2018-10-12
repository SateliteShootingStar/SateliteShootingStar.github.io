

// declare variables here
let birds=0;
let xPos=0;

function setup() {
  // put setup code here --> this runs once upon launch

  createCanvas(600, 500);
  //birds="pretty"

}


function draw() {
  birds-=5;
  xPos++;

  console.log(xPos);

  background(100);
  // put drawing code here --> this loops every frame
  fill(random(100, 255));
  stroke(255);
  strokeWeight(5);
  ellipse(xPos, 200, 200, 80);

// drawing a red rectangle
  fill(255, mouseX, 150,);
  stroke(255);
  strokeWeight(5);
  rectMode(CENTER);
  rect(mouseX, mouseY, 80, mouseY)

}


// write custom functions here
