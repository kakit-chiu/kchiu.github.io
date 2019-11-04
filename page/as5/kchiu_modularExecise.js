///////////////////////
//CSMA 101           //
//Into to Programming//
//Fall 2019          //
//Professor Theohar  //
//Ka Kit Chiu        //
//805-284-8116       //
///////////////////////

//modular galaxy exercise
//three instances (different col/size/rotation speed)

    var angle1;
    var speed1;

function setup(){
    createCanvas(1500,950);
    colorMode(HSB, 360, 100, 100);
    
    starR = new Star(250, 250, 50, 15, 100, 0, 1, 0, 11);
    starY = new Star(1000, 400, 100, 65, 250, 0, 0.75, 0, 3);
    starG = new Star(400, 600, 30, 125, 150, 0, 1.2, 0, 7);
    starB = new Star(750, 750, 60, 200, 150, 0, 0.5, 0, 1);
    

    
}

function draw(){
    background(0);
    
    starR.drawStars();
    starY.drawStars();
    starG.drawStars();
    starB.drawStars();
        
}

//add size and rotational speed later on
//location
function Star(starX, starY, starSize, hueStar, distStar, angleStar1 , rotateSp1, angleStar2 , rotateSp2){
    
    this.x = starX;
    this.y = starY;
    this.s = starSize;
    this.hStar = hueStar;
    this.dS = distStar;
    this.aS1 = angleStar1; 
    this.roSp1 = rotateSp1;
    this.aS2 = angleStar2; 
    this.roSp2 = rotateSp2;
    
    

        
    
    this.drawStars = function(){

        this.aS1 += this.roSp1;
        this.aS2 += this.roSp2;
        
        push();
        
        translate(this.x, this.y);
        rotate(radians(this.aS1));
        stroke(this.hStar, 90, 60);
        strokeWeight(5);
        fill(this.hStar, 80, 100);
        ellipse(0, 0, this.s);    
        
        strokeWeight(1);
        stroke(255); 
        line(0, 0, 0, this.dS);
        
        
        push();
        translate(0, this.dS);
        rotate(radians((this.aS2)));
        stroke(this.hStar, 90, 60);
        strokeWeight(5);
        fill(this.hStar /2, 80, 100);
        ellipse(0, 0, this.s /2); 
        
        noFill();
        strokeWeight(this.s/100);
        stroke(255);
        ellipse(0, 0, this.dS);

        
        push();
        translate(0, this.dS /2); 
        noStroke();
        fill(this.hStar *2.5, 100, 100);
        ellipse(0, 0, this.s /3);
      
        
        pop();
        pop();
        pop();
    }
    
    this.rotateStars = function(){
        
    }
}

