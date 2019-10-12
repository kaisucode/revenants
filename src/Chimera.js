class Chimera extends Entity {
	constructor(incarnation_x, incarnation_y){
		super(incarnation_x, incarnation_y);
		this.whichEntity = "chimera";

		this.isSelected = 0;
		this.defaultColor = color(0, 255, 242);
		this.selectedColor = color(40, 255, 242)
	}
	render() {
		if (this.isSelected)
			fill(this.selectedColor);
		else
			fill(this.defaultColor);
		ellipse(this.pos.x, this.pos.y, this.dims.x, this.dims.y);
	}
}
