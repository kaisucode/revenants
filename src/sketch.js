
let user = new User();

let seraphs = [];
let chimeras = [];
let entities = [seraphs, chimeras];
let stoneRadius = 80;
let seraphSpawnRate = 1.05;

function drawStone(){
	fill(0,255,0,50);
	ellipse(0,0,stoneRadius*2,stoneRadius*2);
}

function pointInRect(point, rectPos, rectDims){
	let xGood = (point.x > rectPos.x) && (point.x < rectDims.x + rectPos.x);
	let yGood = (point.y > rectPos.y) && (point.y < rectDims.y + rectPos.y);
	return yGood && xGood;
}

function rectHitsCircle(posA, rA, posB, dimsB){
  /*circle rectangle collision
  easier to think of circle running into rectangle, even though it is the other way arround
  Basic idea: if the point on the square which is closest to the circle isn't in the circle there is not collision
  otherwise there is collision.
  Clamp opperation: get the point in the sqare closest to the circles center X and Y
  */

  // gives center if circle is in rectangle, otherwise gives the coordinates of the closest side (x and y)
  let nearX = Math.max(x, Math.min(xc, x+w) );
  let nearY = Math.max(y, Math.min(yc, y+h) );

  let dx = nearX - xc; let dy = nearY - yc;

  return (dx*dx + dy*dy <= r*r);

}



function setup(){
	createCanvas(window.innerWidth*0.95, window.innerHeight*0.95);
	seraphs.push(new Seraph(Math.random()*width,Math.random()*height));
	chimeras.push(new Chimera(Math.random()*width,Math.random()*height));
}

function draw(){
	background(0);
	translate(width/2, height/2);
	drawStone();
	if (Math.random() > 1/seraphSpawnRate){
		seraphs.push(new Seraph(Math.random()*width,Math.random()*height));
	}
	for(let i in seraphs){
		if(circleHitsCircle()){
		}
		seraphs[i].render();
		seraphs[i].update();
	}
	for(let i in chimeras){
		chimeras[i].render();
		chimeras[i].update();
	}
	fill(255,255,255);
	text("Slugs: "+user.slugs, 20-width/2, 20-height/2);
	text("Slugs: "+user.slugs, 20-width/2, 20-height/2);
}

