
class Person{
    constructor(name, age){
            this.name = name;
            this.age = age;
    };
    eat(){
        console.log('He is eating...');
    };
    get getName(){
        return this.name;
    };

    set setName(name){
        return this.name = name;
    }
};

let sakib = new Person('sakib', 40);
console.log(sakib.getName);
sakib.setName = 'Tamim';
console.log(sakib.name);
