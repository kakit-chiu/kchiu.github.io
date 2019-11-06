///////////////////////
//CSMA 101           //
//Into to Programming//
//Fall 2019          //
//Professor Theohar  //
//Ka Kit Chiu        //
//805-284-8116       //
///////////////////////

//data exercise-flights


var table;

function preload() {
table = loadTable("data/flights.csv", "csv", "header");
}

function setup() {
  createCanvas(1200,600);
  noStroke();
  background(0);
    noLoop();
}

function draw(){
    
  var rows = table.getRows();
    
// read all rows
  for (var i = 0; i < rows.length; i++) {
      //longtitudes become X coordinate
    var from_long = rows[i].getNum("from_long");
      //latitute beocmes Y coordinate
    var from_lat = rows[i].getNum("from_lat");
      
    var from_country = rows[i].getString("from_country");
    var to_country = rows[i].getString("to_country");
    var distance = rows[i].getNum("distance");

    var x = map(from_long,-180,180,0,width);
    var y = map(from_lat,-90,90,height,0);

      //domestic flights turn orange, internationals turn blue
    if ( from_country == to_country ) {
      fill(255,120,0,10);
    } else {
      fill(0,120,255,10);
    }
      
      //long distance flight make bigger dots
    var radius = map(distance,1,15406,3,15);
    ellipse(x,y,radius,radius);
  }
}