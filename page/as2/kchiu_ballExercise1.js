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

var radius;

function setup() {
    createCanvas(500, 500);
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
    
    if(startX > (width-10) || startX < 10) {
        directionX = -(directionX*1.1);
    }
    
    if(startY > (height-10) || startY < 20) {
        directionY = -(directionY);
    }
    
    
    if(directionX > 35) {
        directionX = directionX / 1.1;
    }
   
    //color 
    colorR = 225;
    colorB = 255;
    colorG = 255;
    
    if(directionX > 10 || directionX < (-10)) {
        colorR = 0;
        colorG = 255;
        colorB = 0;
    }
    
    if(directionX > 15 || directionX < (-15)){
        colorR = 0;
        colorG = 0;
        colorB = 255; 
    }
    
    if(directionX > 30 || directionX <(-30)){
        colorR = 255;
        colorG = 0;
        colorB = 0;
    }
    
    fill(colorR, colorG, colorB);
    ellipse(startX, startY, radius, radius);
    
    //player
    rectH = 100;
    rectW = 10;
    rectX = 25;
        
    y = map(mouseY, 0, height, 0, (height-rectH), true);
    
    fill(0);
    rect(rectX, y, rectW, rectH, rectW / 2);
    fill(255);
    rect((width-(rectW*2)), (startY-(rectH/2)), rectW, rectH, (rectW/2));
    
}