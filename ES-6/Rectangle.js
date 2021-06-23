import Shape from "./shape";

export class Rectangle extends Shape {
	constructor(color, height, width) {
		super(color);
		this.width = width;
		this.height = height;
	}
	circle() {
		let mix = this.width + this.height;
		console.log(mix);
	}
}

export const hello = 'Say hello';

