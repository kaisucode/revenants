class Seraph extends Entity {
	constructor(incarnation_x, incarnation_y){
		super(incarnation_x, incarnation_y);
		this.whichEntity = "seraph";
	}
	update(){
		this.random_anchored_walk();
		super.update();
	}
}
