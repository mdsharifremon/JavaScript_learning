function Mixin(target, ...sources){
    Object.assign(target.prototype, ...sources);
}
var canWalk = {
    walk : function(){
        console.log('Walking....');
    }
}
var canEat = {
    eat : function(){
        console.log('Eating...');
    }
}

function Person (name) {
    this.name = name;
}
let person = new Person('sharif');
Mixin(Person, canWalk, canEat);

console.log(person);
person.eat();
person.walk();




