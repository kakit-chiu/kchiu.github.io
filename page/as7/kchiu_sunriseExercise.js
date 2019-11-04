///////////////////////
//CSMA 101           //
//Into to Programming//
//Fall 2019          //
//Professor Theohar  //
//Ka Kit Chiu        //
//805-284-8116       //
///////////////////////

//sun in-class exercise

var xPos;
var yPos;

var colR;
var colB;


function setup() {
    createCanvas(600,600);
//    colorMode(HSB,360,100,100,100);
//    background(50);
    
    
    //Sun
    radSun = 50;
    xPos = 25;
    yPos = 250;
    
    //rotation;
    angle1 = 0;
    speed1 = 1;
  
}

function draw() {

    
    
    colR = map(yPos, 0, height/2, 0, 255);
    colG = map(yPos, 0, height/2, 180, 120);
    colB = map(yPos, 0, height/2, 180, 80);
    
    
    background(colR, colG, colB);
    
//    fill(0);
//    textSize(20);
//    text (colR,50,50);
    
    
    xPos = xPos + 1;
    yPos = yPos - 1;
    
    if(xPos > 250){
        yPos = yPos +2;
    }
    if(xPos > 475) {
        xPos = 25;
        yPos = 250;
    }
       

    //sun

    fill(220,160,0);
    ellipse(xPos, yPos, 50);
    
    //sea level
    var seaLevel = map(yPos, 0, height/2, height*0.7, height*0.6);
    
    noStroke();
    fill(0,120,180);
    rect(0,seaLevel, width, height);
    
    //
    angle1 += speed1;
    
    //line
    push();
    translate(width /2,height /2+200);
    rotate(radians(angle1));
    
    fill(0);
    ellipse(40, 100, 15, 30);
    fill(150);
    ellipse(0, 100, 75, 30);    
    fill(256);
    ellipse(-20, 105, 12, 12);
    fill(0);
    ellipse(-20, 105, 8, 8);
    
    pop();
    
    fill(0,120,180);
    rect(0,450, width, height);    
}


