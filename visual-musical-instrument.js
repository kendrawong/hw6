
var freqA = 100;
var freqS = 200;
var freqD = 300;
var freqF = 400;

var oscA, oscS, oscD, oscF;

//var playing = false;


function setup() {
  createCanvas(450, 450);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  
  if(key == 'A') {	
    background(0, 255, 0);			//green
		strokeWeight(10);
    line(width/5, 0, width/5, (1/4)*height);
    
  }
  	else if(key == 'S') {				//yellow
    background(255, 255, 0);
		strokeWeight(20);
    line((2/5)*width, 0, (2/5)*width, (2/4)*height);
  }
  	else if(key == 'D') {				//cyan
    background(0, 255, 255);
    strokeWeight(30);
    line((3/5)*width, 0, (3/5)*width, (3/4)*height);
  }
  	else if(key == 'F') {				//magenta
    background(255, 0, 255);
    strokeWeight(40);
    line((4/5)*width, 0, (4/5)*width, (4/4)*height);
  }
  text('click here,\nthen press A/S/D/F\n keys to play', 80, 400) ;
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
