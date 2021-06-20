class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
        a = 4;
	}
	
	print() {
		console.log(this.name);
		console.log(this.age);
	}
}

let sakib = new Person('sakib',35);
sakib.print();
console.log(sakib.a);
