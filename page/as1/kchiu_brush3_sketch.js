////////////////////////
//CSMA 101            //
//Intro to Programming//
//Fall 19             //
//Prof. Theohar       //
//Ka Kit Chiu         //
//805-284-8116        //
////////////////////////

function setup() {
  createCanvas(400, 400);
  background(220);
  colorMode(HSB);
}

function mouseDragged(){
  let x = mouseX;
  let y = mouseY;
  
  stroke(random(1,360), 100, 100, 0.5);
  strokeWeight(random(1,10)*0.5);
  noFill();
  rect(random(50,300), random(50,300), random(50), random(50));
  
  stroke(random(1,360), 100, 100);
  line(pmouseX,pmouseY,x,y);
}

function mouseClicked(){
  let x = mouseX;
  let y = mouseY;
  
  noStroke();
  fill(random(360),100,100,0.5);
  triangle(x,y-random(50),x+random(50),y+random(50),x-random(50),y+random(50));
}
