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
  background(200);
  colorMode(HSB);
}


function mouseDragged(){
  let x = mouseX;
  let y = mouseY;
  
  rectMode(CORNER);
  fill(random(360), 100, 100,0.3);
  stroke(random(100));
  strokeWeight(random(1,10)*0.5);
  rect(x,y,random(100),random(100),random(100));
  
  fill(random(360), 100, 100, 0.6);
  strokeWeight(0.5);
  rect(x,y,random(50),random(50),random(50));
  
}

