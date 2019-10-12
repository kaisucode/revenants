class Entity{
	constructor(incarnation_x, incarnation_y){
		this.whichEntity = "generic";
		this.health = 10;
		this.speed = 2;
		this.pos = new p5.Vector(incarnation_x, incarnation_y);
		this.vel = new p5.Vector(0,0);
		this.dims = new p5.Vector(10,10);
	}
	update(){
		// vel*dt, but dt=1
		this.pos.add(this.vel);
	}
	render(){
		fill(255,0,0);
		ellipse(this.pos.x, this.pos.y, this.dims.x, this.dims.y);
	}
}
