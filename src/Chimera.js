class Chimera extends Entity {
	constructor(incarnation_x, incarnation_y){
		super(incarnation_x, incarnation_y);
		this.whichEntity = "chimera";

		this.meleeDamage = 10;
		this.auraAttackDamage = 5;

		this.auraAttackCooldown = 0;
		this.isSelected = 0;
		this.defaultColor = color(0, 255, 242);
		this.selectedColor = color(40, 200, 100)

		this.auraPos = createVector(this.pos.x+this.dims.x/2, this.pos.y+this.dims.y/2);
		this.auraRadius = 100;
	}
	render() {
		if (this.isSelected)
			fill(this.selectedColor);
		else
			fill(this.defaultColor);
		rect(this.pos.x, this.pos.y, this.dims.x, this.dims.y);

		if (this.auraAttackCooldown > 0){
			fill(0, 255, 242, 50);
			ellipse(this.auraPos.x, this.auraPos.y, this.auraRadius*2, this.auraRadius*2);
			this.auraAttackCooldown -= 0.05;
		}
	}
}
