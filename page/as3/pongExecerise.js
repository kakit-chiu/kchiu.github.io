///////////////////////
//CSMA 101           //
//Into to Programming//
//Fall 2019          //
//Professor Theohar  //
//Ka Kit Chiu        //
//805-284-8116       //
///////////////////////

//switch execerise

//variable for ball
var ballX;
var ballY;
var diameter;
var directionX;
var directionY;

var colorR;
var colorB;
var colorG;

//variable for paddle
var rectX;
var rectY;
var rectW;
var rectH = 10;

var started = false;
var score = 0;

var startY;
var startX;

function setup() {
    createCanvas(800,800);
    
    diameter = 50;
    ballX = width /2;
    ballY = 50; 
    
    directionX = 6;
    directionY = 5;
    
    speed = 0;
    
    rectW = 250;
    startX = random(0,width);
    startY = 0;
}

function draw() {
    background(200);
    
    //ball bounces off wall
    ballX = ballX + directionX;
     ballY = ballY + directionY;
    
    if(ballX < 0 || ballX > width) {
        directionX = -directionX;
    }
    
    if(ballY < 0 || ballY > height) {
        directionY = -directionY;
    }


    
    //detect collisin with paddle
    if((ballX > (pmouseX - rectW) && ballX < pmouseX + rectW) && (ballY + (diameter/2) >= rectY)) {
       directionX*= -1;
       directionY*= -1;
        score++;
       }
    
  //lose to reset
    if(ballY > height) {
        score = 0;
        
        ballX = width/2;
        ballY = 50;
        
        speed = 0;
        rectW = 250;
        diameter = 50;
        
        colorR = colorG = colorB = 255;
    }
    
    
    //draw ball
    
    if(score > 3) {
        colorR = 80;
        colorG = 255;
        colorB = 0;
        
        diameter = 40;
        rectW = 200;
    }
    
    if(score > 5) {
        colorR = 0;
        colorG = 80;
        colorB = 255;
        
        diameter = 30;
        rectW = 150;
    }
    if(score > 7) {
        colorR = 255;
        colorG = 80;
        colorB = 0;
        
        diameter = 20;
        rectW = 100;
    }
    
    
    fill(colorR, colorG, colorB);
    ellipse(ballX, ballY, diameter, diameter);

    //draw paddle
    
    x = map(mouseX, 0, width, 0, (height-rectW), true);
    
    fill(255);
    rect(x, rectY, rectW, rectH,5);
    
    //update paddle location
    if (!started){
        pmouseX = width/2;
        rectY = height -100;
        started = true;
    }  
    
    //draw score
    fill(255);
    textSize(25);
    text("Score: " + score, 10, 25);
    
}