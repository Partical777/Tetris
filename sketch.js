/* 

Array[][]
     y x
     20 13
*/

//Make every types of block a class


var ValueX,ValueY;
ValueX = 180;
ValueY = 0;
//How height each column
var HeightPosition = [570,570,570,570,570,570,570,570,570,570,570,570,570];
var HeightNo = 6; //Start from 0 to 12

var colors = new Array(13);

for (var i = 0 ; i < 20 ; i++) {
	colors[i] = new Array();
  for (var j = 0 ; j < 13 ; j++) {
    colors[i][j] = 0;
  }
}

//===reset===
function reset() {
  ValueX,ValueY;
  ValueX = 180;
  ValueY = 0;
  //How height each column
  HeightPosition = [570,570,570,570,570,570,570,570,570,570,570,570,570];
  HeightNo = 6; //Start from 0 to 12

  for (var i = 0 ; i < 20 ; i++) {
    for (var j = 0 ; j < 13 ; j++) {
      colors[i][j] = 0;
    }
  }
}

//===ResetButtonBuild===
function ResetButtonBuild(){
  fill('#fae');
	noStroke();
	rect(10,10,75,45);
	fill(255, 255, 255);
	textSize(24);
	textAlign(CENTER);
	text('Reset', 45, 40);
	stroke(1);
}


//===setup===
function setup() {
  createCanvas(390, 600);
}

//===draw===
function draw() {
  background(250,250,0);
  
  fill('rgb(255,255,255)');
	//Storage position
	for (i = 0 ; i < 13 ; i++) {
		for (j = 0 ; j < 20 ; j++) {
			if(colors[j][i] == 1){
				rect(i*30,j*30,30,30);
			}
		}
	}
	
  if (keyIsDown(32)){  //Drop down faster
    if(ValueY <= HeightPosition[HeightNo]){
      ValueY += 5;
    }
  }
  
  if(ValueY <= HeightPosition[HeightNo]+25){    //add 25 make block at bottom can move a little bit second
    ValueY += 1;
  }
	
  rect(ValueX,(int)(ValueY/30)*30,30,30);
// 	PositiveSeven(ValueX,(int)(ValueY/30)*30,0);
	
	//reset
	if(ValueY > HeightPosition[HeightNo]+25){    //add 25 make block at bottom can move a little bit second
		colors[(int)(ValueY/30)][ValueX/30] = 1;
		HeightPosition[HeightNo] -= 30;
		console.log(ValueX/30);
		console.log((int)(ValueY/30));
		console.log(colors[(int)(ValueY/30)][ValueX/30]);
		ValueY = 0;
		ValueX = 180;
		HeightNo = 6;
	}
	
  //If fill one rol
	for (x = 19 ; x > 0 ; x--) {
		if(1 === colors[x][0] && 1 === colors[x][1] && 1 === colors[x][2] && 1 === colors[x][3] && 1 === colors[x][4] && 1 === colors[x][5] && 1 === colors[x][6] && 1 === colors[x][7] && 1 === colors[x][8] && 1 === colors[x][9] && 1 === colors[x][10] && 1 === colors[x][11] && 1 === colors[x][12]){
			//That Row Reset to 0
			for (y = 0 ; y < 13 ; y++){
			  colors[x][y] = 0;
			  HeightPosition[y] += 30; //Height Decrease 30
			}
			
			//move down block
			for (k = 19 ; k > 0 ; k--) {
			  for (m = 0 ; m < 13 ; m++){
			    colors[k][m] = colors[k-1][m];
			  }
			}
			
		}
	}
	
	ResetButtonBuild();
	
}

//===mousePressed==
function mousePressed() {
  if(mouseX <= 85 && mouseX >= 10 && mouseY <= 55 && mouseY >= 10){
    reset();
    console.log("Success Reset Game!");
  }
}

//===keypressed===
function keyPressed(){

  // var HowHeight;
  if (keyCode === 37){  //move left
    if(ValueX > 0 && colors[(int)(ValueY/30)][ValueX/30-1] !== 1){    //check left doesn't have block
      ValueX -= 30;
      HeightNo -= 1;
    }
    
  }else if (keyCode === 39){  //move right
    if(ValueX < 360 && colors[(int)(ValueY/30)][ValueX/30+1] !== 1){    //check right doesn't have block
      ValueX += 30;
      HeightNo += 1;
    }
    
  }else if (keyCode === 38){  //rotate right
      direction++;
      if(direction > 3){
        direction = 0;
      }
  }else if (keyCode === 17){ //show data Ctrl
	  for(var ii = 19 ; ii > 0 ; ii--){
      console.log(HeightPosition);
    }
	}else if (keyCode === 16){ //show data Shift
	  var j = 0;
	  for (i = 0 ; i < 20 ; i++) {
  		console.log(colors[i][j]+" "+colors[i][j+1]+colors[i][j+2]+colors[i][j+3]+colors[i][j+4]+colors[i][j+5]+colors[i][j+6]+colors[i][j+7]+colors[i][j+8]+colors[i][j+9]+colors[i][j+10]+colors[i][j+11]+colors[i][j+12]);
  	}
	}
  return false;
}

//===Different Type Block===
var direction = 0; 

function PositiveSeven(i,j,d){
  switch(d){
    case 0:
        rect(i,j,30,30);
        rect(i-30,j-30,30,30);
        rect(i-30,j,30,30);
        rect(i+30,j,30,30);
      break;
    case 1:
        rect(i,j,30,30);
        rect(i,j-30,30,30);
        rect(i+30,j-30,30,30);
        rect(i,j+30,30,30);
      break;
    case 2:
        rect(i,j,30,30);
        rect(i-30,j,30,30);
        rect(i+30,j,30,30);
        rect(i+30,j+30,30,30);
      break;
    case 3:
        rect(i,j,30,30);
        rect(i,j-30,30,30);
        rect(i,j+30,30,30);
        rect(i-30,j+30,30,30);
      break;
  }
}

function NegativeSeven(i,j,d){
  switch(d){
    case 0:
        rect(i,j,30,30);
        rect(i+30,j-30,30,30);
        rect(i-30,j,30,30);
        rect(i+30,j,30,30);
      break;
    case 1:
        rect(i,j,30,30);
        rect(i,j-30,30,30);
        rect(i,j+30,30,30);
        rect(i+30,j+30,30,30);
      break;
    case 2:
        rect(i,j,30,30);
        rect(i+30,j,30,30);
        rect(i-30,j,30,30);
        rect(i-30,j+30,30,30);
      break;
    case 3:
        rect(i,j,30,30);
        rect(i-30,j-30,30,30);
        rect(i,j-30,30,30);
        rect(i,j+30,30,30);
      break;
  }
}

function BigBlock(i,j,d){
  rect(i,j,30,30);
  rect(i+30,j-30,30,30);
  rect(i,j-30,30,30);
  rect(i+30,j,30,30);
}

function PositiveS(i,j,d){
  switch(d){
    case 0:
        rect(i,j,30,30);
        rect(i-30,j,30,30);
        rect(i,j-30,30,30);
        rect(i+30,j-30,30,30);
      break;
    case 1:
        rect(i,j,30,30);
        rect(i,j-30,30,30);
        rect(i+30,j,30,30);
        rect(i+30,j+30,30,30);
      break;
    case 2:
        rect(i,j,30,30);
        rect(i-30,j+30,30,30);
        rect(i,j+30,30,30);
        rect(i+30,j,30,30);
      break;
    case 3:
        rect(i,j,30,30);
        rect(i-30,j-30,30,30);
        rect(i-30,j,30,30);
        rect(i,j+30,30,30);
      break;
  }
}

function NegativeS(i,j,d){
  switch(d){
    case 0:
        rect(i,j,30,30);
        rect(i-30,j-30,30,30);
        rect(i,j-30,30,30);
        rect(i+30,j,30,30);
      break;
    case 1:
        rect(i,j,30,30);
        rect(i+30,j-30,30,30);
        rect(i+30,j,30,30);
        rect(i,j+30,30,30);
      break;
    case 2:
        rect(i,j,30,30);
        rect(i-30,j,30,30);
        rect(i,j+30,30,30);
        rect(i+30,j+30,30,30);
      break;
    case 3:
        rect(i,j,30,30);
        rect(i,j-30,30,30);
        rect(i-30,j,30,30);
        rect(i-30,j+30,30,30);
      break;
  }
}

function TBlock(i,j,d){
  switch(d){
    case 0:
        rect(i,j,30,30);
        rect(i-30,j,30,30);
        rect(i+30,j,30,30);
        rect(i,j-30,30,30);
      break;
    case 1:
        rect(i,j,30,30);
        rect(i,j-30,30,30);
        rect(i,j+30,30,30);
        rect(i+30,j,30,30);
      break;
    case 2:
        rect(i,j,30,30);
        rect(i-30,j,30,30);
        rect(i+30,j,30,30);
        rect(i,j+30,30,30);
      break;
    case 3:
        rect(i,j,30,30);
        rect(i,j-30,30,30);
        rect(i,j+30,30,30);
        rect(i-30,j,30,30);
      break;
  }
}

function LineBlock(i,j,d){
  switch(d){
    case 0:
        rect(i,j,30,30);
        rect(i-30,j,30,30);
        rect(i-60,j,30,30);
        rect(i+30,j,30,30);
      break;
    case 1:
        rect(i,j,30,30);
        rect(i,j-30,30,30);
        rect(i,j-60,30,30);
        rect(i,j+30,30,30);
      break;
    case 2:
        rect(i,j,30,30);
        rect(i-30,j,30,30);
        rect(i+30,j,30,30);
        rect(i+60,j,30,30);
      break;
    case 3:
        rect(i,j,30,30);
        rect(i,j-30,30,30);
        rect(i,j+30,30,30);
        rect(i,j+60,30,30);
      break;
  }
}
