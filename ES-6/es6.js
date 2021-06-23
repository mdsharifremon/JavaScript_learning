

let one = new Rectangle('red', 20, 10);
one.circle();
class JavaScript{
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.name = 'Javascript';
    }
    
    show() {
        let arr = [this.a, this.b, this.c];
        arr.forEach((a)=>{
            console.log(`${this.name} love ${a}`);
        })
    }   
}

let a = new JavaScript('react', 'angular', 'vue');
a.show();


import { hello } from "Rectangle.js";
console.log(hello);