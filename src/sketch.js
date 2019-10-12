
let seraphs = [];
let chimeras = [];
let entities = [seraphs, chimeras];
let defenseRadius = 40;

function setup(){
	createCanvas(window.innerWidth*0.95, window.innerHeight*0.95);
	seraphs.push(new Seraph());
	chimeras.push(new Chimera());
}

function draw(){
	translate(width/2, height/2);
	background(0);
	for (let i in entities){
		for(let j in entities[i]){
			entities[i][j].render();
			entities[i][j].update();
		}
	}
}
