
let seraphs = [];
let chimeras = [];
let entities = [seraphs, chimeras];
let defenseRadius = 40;
let seraphSpawnRate = 100;

function setup(){
	createCanvas(window.innerWidth*0.95, window.innerHeight*0.95);
	seraphs.push(new Seraph(Math.random(0,width),Math.random(0,height)));
	chimeras.push(new Chimera(Math.random(0,width),Math.random(0,height)));
}


function draw(){
	if (Math.random() < 1/seraphSpawnRate){
		seraphs.push(new Seraph(Math.random(0,width),Math.random(0,height)));
	}
	translate(width/2, height/2);
	background(0);
	for (let i in entities){
		for(let j in entities[i]){
			entities[i][j].render();
			entities[i][j].update();
		}
	}
}
