
let user = new User();

let seraphs = [];
let chimeras = [];
let entities = [seraphs, chimeras];
let defenseRadius = 40;
let seraphSpawnRate = 100;

function setup(){
	createCanvas(window.innerWidth*0.95, window.innerHeight*0.95);
	seraphs.push(new Seraph(Math.random()*width,Math.random()*height));
}

function draw(){
	if (Math.random() < 1/seraphSpawnRate){
		seraphs.push(new Seraph(Math.random()*width,Math.random()*height));
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

function mouseReleased() {
	reviveChimera(mouseX-width/2, mouseY-height/2);
}

function reviveChimera(posX, posY) {
	if (user.souls > 0) {
		chimeras.push(new Chimera(posX, posY));
		user.souls--;
	}
}

