class Seraph extends Entity {
	constructor(incarnation_x, incarnation_y){
		super(incarnation_x, incarnation_y);
		this.whichEntity = "seraph";
	}
	random_walk(){
		this.vel.x = Math.random()-0.5;
		this.vel.y = Math.random()-0.5;
		this.vel.mult(this.speed/this.vel.mag());
	}
	update(){
		super.update();
		this.random_walk();
	}
}
