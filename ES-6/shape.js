class Shape {
	constructor(color) {
		this.color = color;
	}
	draw() {
		console.log(this.color);
		console.log("Drawing....");
	}
}

export default Shape;