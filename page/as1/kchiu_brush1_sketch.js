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
}

function draw() {
}
  function mouseDragged() {
    let a = random(1, 25);
    let b = random(frameCount%360);
    let x = mouseX;
    let y = mouseY; 
    fill(b,x,y);
    noStroke();
    strokeWeight(random(0.1,3.0));
    ellipse(x,y,a,a);
    
    let r = random(1,15)
    strokeWeight(r);
    stroke(b,x,y);
    smooth();
    line(pmouseX,pmouseY,mouseX,mouseY);
}
  