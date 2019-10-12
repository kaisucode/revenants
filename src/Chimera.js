class Chimera extends Entity {
	constructor(incarnation_x, incarnation_y){
		super(incarnation_x, incarnation_y);
		this.whichEntity = "chimera";
	}
	render() {
		fill(0,255,242);
		ellipse(this.pos.x, this.pos.y, this.dims.x, this.dims.y);
	}
}
