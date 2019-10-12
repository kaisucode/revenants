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
		let proposedpos = p5.Vector.add(this.pos, this.vel);
		let xGood = proposedpos.x>-width/2+this.dims.x/2 && proposedpos.x<width/2-this.dims.x/2;
		let yGood = proposedpos.y>-height/2+this.dims.y/2 && proposedpos.y<height/2-this.dims.y/2; 
		if (xGood)
			this.pos.x += this.vel.x
		if (yGood)
			this.pos.y += this.vel.y
	}
	render(){
		fill(255,0,0);
		ellipse(this.pos.x, this.pos.y, this.dims.x, this.dims.y);
	}
}
