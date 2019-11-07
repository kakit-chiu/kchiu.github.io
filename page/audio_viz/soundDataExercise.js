///////////////////////
//CSMA 101           //
//Into to Programming//
//Fall 2019          //
//Professor Theohar  //
//Ka Kit Chiu        //
//805-284-8116       //
///////////////////////

// sound exercise

var readyToGo = false;
var sound;
var x;
var fft;
var y;

function preload(){
    
    sound = loadSound("sounds/youngblood.mp3");
}

function setup(){
    
    createCanvas(500, 500);
    colorMode(HSB,360,100,100)
    angleMode(DEGREES);
    
    fft = new p5.FFT();
}

function draw(){
    
    background(0);
    
    if(readyToGo){
        background(0);
        

        
        //listen to the spectrum, drawn as an array
        
        var spectrum = fft.analyze();
        
        //go point by point
        for(var i = 0; i < spectrum.length; i++){
            
            
            //color
            h = map(spectrum[i], 0, 255, 0, 360);
        
            stroke(h, 100, 100);
            
//            //+500 because otherwise it wont fill full width
//            x = map (i, 0, spectrum.length, 0, width+500)
//            
//            //remapping height
//            y = map(spectrum[i], 0, 255, 0, 500);
//            

//            
//            //size
            s = map(spectrum[i], 0, 255, 1, 100);
//            
//            fill(h,100,100);
//            noStroke();
//            ellipse(x, height -(y+50), s);
//          
            angle1 = map(spectrum[i], 0, 255, 1, 360)
            
            push();
            
            translate(width /2, height /2)
            noFill();
            rotate(angle1);
            
            rect(0, 50, 2, s);
            
            pop();
            //spectrum[i]+200
        }
        
    }
    
}

function mousePressed(){
    
    sound.play();
    readyToGo = true;
}

function keyPressed(){
    
    if (key == 'p'){
        readyToGo = false;
        sound.pause;
    }
}