//////////////////////
//Woodbury Univerity//
//CSMA 101          //
//Fall 2019         //
//Prof. Theohar     //
//Ka Kit Chiu       //
//805-284-8116      //
//////////////////////

//Ball Execerise
var startX;
var startY;
var directionX;
var directionY;

var rectH;
var rectW;
var rectX;

var colorR;
var colorB;
var colorG;

var shiftX;

function setup() {
    createCanvas(500,500);
    background(200);
    
    //starting point
    startX = width / 2;
    startY = height / 2;
    
    //movement
    directionX = random(-9,9);
    directionY = random(-5,5);
    
    //pong ball
    radius = 30;
}

function draw() {
    background(200);
    
    startX = startX + directionX;
    startY = startY + directionY;
    shiftX = 0;
    
    //faces
    fill(255);
    rect((width-100)/2, (height-100)/2, 100, 100, 10);
    
    ellipse(width/2-25, height/2, 35,35);
    ellipse(width/2+25, height/2, 35,35);
    
    eye1x = map(startX, 0, width, (width/2)-35, (width/2)-15, true);
    eye2x = map(startX, 0, width, (width/2)+15, (width/2)+35, true);
    eye1y = map(startY, 0, height, (height/2)-7, (height/2)+7, true);
    eye2y = map(startY, 0, height, (height/2)-7, (height/2)+7, true);
    
    //ellipse (eye1, height/2, 25, 25);
    //ellipse (eye2+100, height/2, 25, 25);
    fill(0);
    ellipse(eye1x, eye1y, 15, 15);
    ellipse(eye2x, eye2y, 15, 15);
    
    
    if(startX > (width-rectW/2) || startX < (-rectW/2)) {
        directionX = -(directionX);
        shiftX = 30;
    }
    if(startY > (width-rectH/2) || startY < (rectH/2)) {
        directionY = -(directionY);
    }    
    
    //fly
    rectH = random (1, 30);
    rectW = 20;
    
    fill(100);
    ellipse(startX, startY, 30, 20);
    fill(150);
    rect(startX-10, startY-10, rectW, rectH, 20);
}