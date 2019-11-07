var table;
var table1;
var tbale2;

var flights = [];


function preload() {
 
    table = loadTable("data/flights.csv","csv","header");
//    tbale1 = loadTable("assets/baseState.csv","csv","header");
//    table2 = loadTable("assets/airportUSCounts.csv","csv","header");

   
}

function setup() {
  createCanvas(1200, 750);
  noStroke();
  noLoop();

  var rows = table.getRows();
  for ( var i in rows ) {
    var from_airport = rows[i].getString("from_airport");
    var from_city = rows[i].getString("from_city");
    var from_country = rows[i].getString("from_country");
    var from_long = rows[i].getNum("from_long");
    var from_lat = rows[i].getNum("from_lat");
    var to_airport = rows[i].getString("to_airport");
    var to_city = rows[i].getString("to_city");
    var to_country = rows[i].getString("to_country");
    var to_long = rows[i].getNum("to_long");
    var to_lat = rows[i].getNum("to_lat");
    var airline = rows[i].getString("airline");
    var airline_country = rows[i].getString("airline_country");
    var distance = rows[i].getNum("distance");

    var this_flight = new flight(distance, from_long, from_lat, to_long, to_lat, from_country, to_country);
    flights.push(this_flight);
  }
      
//  var rows = table1.getRows();
//  for ( var i in rows){
//      var catalog = rows[i].getString("catalog");
//      var flight_overallCount = rows[i].getNum("number");
//      var percentage = rows[i].getNum("percentage");
//  }
    
}

function draw() {
    background(0);
    
    for ( var i in flights ) {
    flights[i].drawAirports();
  } 

    //pie chart para
    var pieD = 100;
    var offset = 30;
    var pie1X = width /3 *1;
    var pie1Y = height - (100);
    var pie2X = width /3 *2;
    var pie2Y = height - (100);
    stroke(0,0,0);

      fill(255,120,0,175);
        arc( pie1X, pie1Y, pieD, pieD, 0, radians(241), PIE);
        arc( pie2X, pie2Y, pieD, pieD, 0, radians(126), PIE);
      fill(0,120,255,175);
        arc( pie1X, pie1Y, pieD, pieD, 0 + radians(241), radians(360), PIE);
        arc( pie2X, pie2Y, pieD, pieD, 0 + radians(126), radians(360), PIE);
      fill(0);
      ellipse(pie1X, pie1Y , pieD - offset);
      ellipse(pie2X, pie2Y , pieD - offset);

         
    noStroke();
    textSize(15);
    fill(255,120,0);
        text("Domestic Flight-----", 20, 20);
    fill(0,120,255);
        text("International Flight-----", 20, 40);
        
    textSize(10);
    fill(255,120,0,175);
        text("-Domestic-", pie1X-105, pie1Y);
        text("-Domestic-", pie2X+50, pie2Y);
        text("9562-67%", pie1X-105, pie1Y+12);
        text("11.8M-35%", pie2X+50, pie2Y+12);

    fill(0,120,255,175);
        text("-International-", pie1X+50, pie1Y);
        text("-International-", pie2X-115, pie2Y);
        text("4675-33%", pie1X+50, pie1Y+12);
        text("21.9M-65%", pie2X-115, pie2Y+12);

    fill(255,255,255,175);
        text("Flight Counts (US)",pie1X-40, pie1Y-50);
        text("Mileage (M.)",pie2X-30, pie2Y-50);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var flight = function(d,flo,fla,tlo,tla,fc,tc,fa,ta) {
    
  this.distance = d;
  this.from_long = flo;
  this.from_lat = fla;
  this.to_long = tlo;
  this.to_lat = tla;
  this.from_country = fc;
  this.to_country = tc;
    
  this.from_airport = fa;
  this.to_airport = ta;

  this.departureX = map(this.from_long, -180,180,0,width);
  this.departureY = map(this.from_lat, -90,90,height,0);
  this.arrivalX = map(this.to_long, -180,180,0,width);
  this.arrivalY = map(this.to_lat, -90,90,height,0);
    
    var lineSize = map(this.distance, 6, 15259, 0.5, 1.5);
    var lineOp = map(this.distance, 6, 15259, 75, 200);
    

    

    //selection detect
  this.selected = function() {
    if ( dist(mouseX, mouseY, this.departureX, this.departureY) < 7 ) {
        return true;
    } else {
        return false;
    }
  }
  
    //local fligth detect
  this.local = function(){
      if ( this.from_country == this.to_country){
          return true;
      } else {
          return false;
      }
  }

//////////////////////////////////////////////////////////////////////////base map
    this.drawBasePoint = function(){
    strokeWeight(5);
    stroke(255,255,255,10);
    point(this.departureX, this.departureY);
    point(this.arrivalX, this.arrivalY);
  }
  
////////////////////////////////////////////////////////////////////////selected (local vs. intl)
  this.drawFlightlines = function() {
    if ( this.selected() ) {
        if( this.local()){
        stroke(255,120,0,lineOp);
        strokeWeight(lineSize);
        }else{
        stroke(0,120,255,lineOp);
        strokeWeight(lineSize);
        }
    noFill();
    curve(this.departureX, this.departureY+200, this.departureX, this.departureY, this.arrivalX, this.arrivalY, this.arrivalX, this.arrivalY+200);

   }
      
  }
  //////////////////////////////////////////////////////////////////////////// airport location
  this.drawDepartureAirport = function() {
    if ( this.selected() ) {
        if( this.local()){    
        stroke(255,120,0);
        } else {
        stroke(0,120,255);
        }
    strokeWeight(5);
    point(this.departureX, this.departureY);
   
//    noStroke();
//        fill(100);
//    textSize(10);
//    text("this.from_airport", departureX, departureY-10);
    }
  }
  
  this.drawArrivalAirport = function() {
    if ( this.selected() ) {
        if( this.local()){
        stroke(255,120,0);
        } else {
        stroke(0,120,255);
        }
    strokeWeight(5);
    point(this.arrivalX, this.arrivalY);
        
//    noStroke();
//        fill(100);
//    textSize(20);
//    text(this.to_airpoint, arrivalX, arrivalY-25);
    }
  }

    
  



    this.drawAirports = function() {
        
        this.drawDepartureAirport();
        this.drawArrivalAirport();
        this.drawFlightlines();
//        this.drawText();
        this.drawBasePoint();
//        this.pieChart1();
//        this.pieChart2();
    }
}


function mousePressed() {
  redraw();
  return false;
}