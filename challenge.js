//challenge: circle-grid.js from week 3

function setup() { 
  createCanvas(400, 400);
  background(0, 0, 0);
} 

function draw() { 
  var row = 25
	var col = 25
	for (var c=0; c <=14; c++){   //number of circles is 14 in column
  for (var r=0; r <=14; r++){   //number of circles is 14 in row
    fill("white");
  	ellipse(col, row, 20, 20);
  	col = col + 25
  
  }
    col = 25
    row = row + 25 //position and spacing
}}
