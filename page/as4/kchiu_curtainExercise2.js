///////////////////////
//CSMA 101           //
//Into to Programming//
//Fall 2019          //
//Professor Theohar  //
//Ka Kit Chiu        //
//805-284-8116       //
///////////////////////

//curtain exercise

var img1;
var img2;
var img3;
var totalCircles;
var x, y;
var desiredColor;
var c;

var action;

function preload() {

    img1 = loadImage ("data/test4.jpg");
    img2 = loadImage ("data/ivy.jpg");
    img3 = loadImage ("data/test3.jpg");
}

function setup() {
    createCanvas (700,700);
    background (255);
    colorMode (RGB,255);
    angleMode (DEGREES)
    
    //loading image data
    img1.loadPixels();
    img2.loadPixels();
    img3.loadPixels();
    
    //initialize values
    totalCircles = 50;
    y = 0;
    c = 1;
    
    
}

function draw() {
    //set circle size based off totalCircles
    var circleSize = width/totalCircles;
    
    //draw circles
    var currentCircle = 0;
    
    //keeps the size proportional to your width
    while(currentCircle < totalCircles) {
        x = currentCircle * circleSize;
        
    //get color
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2();
    var desiredColor3 = getColor3();
        
    //change action
    var action;
        
    if(c>0) {
        fill(desiredColor1);
    }
    if(c>1) {
        fill(desiredColor2);
    }
    if(c>2) {
        fill(desiredColor3)
    }
    
    if(c % 2 == 0){
        action = rect;
        rotate(85);
    } else {
        action = ellipse;
        rotate(90);
    }
        
    
    translate(500,-500);
    action(x,y,circleSize, circleSize);
        currentCircle++;
    }

//    polygon(x, y, circleSize, random(3,5));
//    currentCircle++;
//    }
//    
//    function polygon(x, y, radius, npoints){ 
//    }
    
    //move down a row
    y = y + circleSize;
    //start over at top
    if(y > 1500) {
        totalCircles = random(25, 75);
        c = c+1;
        y = 0;
    }
    if(c>3){
        c = 0;
        c = c+1;
        y = 0;
    }
}
    

function getColor1() {
    
    var desiredColor1 = img1.get(floor(x),floor(y));
    return desiredColor1;
}

function getColor2() {
    
    var desiredColor2 = img2.get(floor(x),floor(y));
    return desiredColor2;
}

function getColor3() {
    var desiredColor3 = img3.get(floor(x),floor(y));
    return desiredColor3;
}
    
    
    

        