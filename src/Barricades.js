class Barricades extends Entity {
	constructor(incarnation_x, incarnation_y){
		super(incarnation_x, incarnation_y);
		this.whichEntity = "barricade";

		this.isSelectedcted = 0;
		this.defaultColor = color(255, 42, 42);
		this.selectedColor = color(40, 200, 100)
// this.health = set_barricade_value
	}
	render() {
		if (this.isSelected)
			fill(this.selectedColor);
		else
			fill(this.defaultColor);
		rect(this.pos.x, this.pos.y, this.dims.x, this.dims.y);
	}
}
