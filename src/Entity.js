class Entity{
	constructor(incarnation_pos){
		this.health = 10;
		this.pos = incarnation_pos;
		this.vel = new p5.Vector(0,0);
		this.dims = new p5.Vector(10,10);
	}
	update(){
		// vel*dt, but dt=1
		this.pos.add(this.vel);
	}
	render(){
		fill(255,0,0);
		ellipse(this.pos.x,this.pos.y,this.dims.x,this.dims.y);
	}
}
