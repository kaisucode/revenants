
let user = new User();

let seraphs = [];
let chimeras = [];
let entities = [seraphs, chimeras];
let stoneRadius = 80;
let stonePos = new p5.Vector(0,0);
let seraphSpawnRate = 1.02;
let deadCt = 0;

function drawStone(){
	fill(0,255,0,50);
	ellipse(0,0,stoneRadius*2,stoneRadius*2);
}

function collideLine(aMin, aMax, bMin, bMax) {
	return ((bMin < aMax) && (bMax > aMin));
}

function rectHitsRect(posA, dimsA, posB, dimsB) {
	let xInt = collideLine([posA.x, posA.x+dimsA.x], [posB.x, posB.x+dimsB.x]);
	let yInt = collideLine([posA.y, posA.y+dimsA.y], [posB.y, posB.y+dimsB.y]);
	return (xInt && yInt);
}

function largeRadiusRandomPoint(r){
	return [r*Math.cos(Math.random()*2*Math.PI), r*Math.sin(Math.random()*2*Math.PI)];
}

function pointInRect(point, rectPos, rectDims){
	let xGood = (point.x > rectPos.x) && (point.x < rectDims.x + rectPos.x);
	let yGood = (point.y > rectPos.y) && (point.y < rectDims.y + rectPos.y);
	return yGood && xGood;
}

function circleHitsCircle(posA, rA, posB, rB){
	let dx2 = Math.pow(posA.x - posB.x, 2);
	let dy2 = Math.pow(posA.y - posB.y, 2);
	return dx2+dy2 <= Math.pow(rA+rB,2)
}

function rectHitsCircle(posCircle, rCircle, posRect, dimsRect){
  /*circle rectangle collision
  easier to think of circle running into rectangle, even though it is the other way arround
  Basic idea: if the point on the square which is closest to the circle isn't in the circle there is not collision
  otherwise there is collision.
  Clamp opperation: get the point in the sqare closest to the circles center X and Y
  */

  // gives center if circle is in rectangle, otherwise gives the coordinates of the closest side (x and y)
  let nearX = Math.max(posRect.x, Math.min(posCircle.x, posRect.x+dimsRect.x));
  let nearY = Math.max(posRect.y, Math.min(posCircle.y, posRect.y+dimsRect.y));

  let dx = nearX - posCircle.x; let dy = nearY - posCircle.y;

  return (dx*dx + dy*dy <= rCircle*rCircle);

}


function setup(){
	createCanvas(window.innerWidth*0.95, window.innerHeight*0.95);
	textSize(30);
}

function draw(){
	background(0);
	translate(width/2, height/2);
	drawStone();
	if (Math.random() > 1/seraphSpawnRate){
		seraphs.push(new Seraph(...largeRadiusRandomPoint(height*0.8)));
	}
	for(let i in seraphs){
		if(rectHitsCircle(stonePos, stoneRadius, seraphs[i].pos, seraphs[i].dims)){	
			deadCt++;
		}
		seraphs[i].render();
		seraphs[i].update();
	}
	for(let i in chimeras){
		chimeras[i].render();
		chimeras[i].update();
	}
	fill(255,255,255);
	text("Slugs: "+user.slugs, 20-width/2, 30-height/2);
	text("Souls: "+user.souls, 20-width/2, 60-height/2);
	text("Deathct: "+deadCt, 20-width/2, 90-height/2);
}


function mouseReleased(){
	if (keyIsDown(83)){		// s key
		reviveChimera(mouseX-width/2, mouseY-height/2);
	}
	else if (keyIsDown(68)){	// d key
		let selectedChimeraIndex = selectChimera(mouseX-width/2, mouseY-height/2);
		deleteChimera(selectedChimeraIndex);
	}
	else{
		selectChimera(mouseX-width/2, mouseY-height/2);
	}
}

function reviveChimera(posX, posY){
	if (user.souls > 0) {
		chimeras.push(new Chimera(posX, posY));
		user.souls--;
		console.log("spawned chimera");
	}
}

function selectChimera(x, y){
	for(let i in chimeras){
		if (pointInRect(createVector(x, y), chimeras[i].pos, chimeras[i].dims)){
			chimeras[i].isSelected = 1;
			console.log("selected chimera");
			return i;
		}
	}
	return -1;
	console.log("none selected");
}

function deleteChimera(selectedChimeraIndex){
	if (selectedChimeraIndex == -1)
		return;
	user.souls++;
	chimeras.splice(selectedChimeraIndex, 1);
}

