# JavaScript Core Concepts

<!------------------------------------------------------
## ####     JAVASCRIPT HOISTING   #######
-------------------------------------------------------->

<details>
<summary><b> JavaScript Hoisting</b></summary>

<b>Hoisting:</b>
JavaScript engine working way is basically called hoisting.
JavaScript engine works in two step.
JavaScript Code will run line by line. Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
Hoisting applies to variable declarations and to function declarations.
Because of this, JavaScript functions can be called before they are declared:<br>

**Creational step**  it declarer variable and assign value undefined to each variable whether it is assigned or not. It will not look for its value.
For the function it will take the reference of function. It will not execute anything. <br><br>
**Executional Step**  it will look for execution and look for values for variable. If it found variables got its value it will print that. Otherwise it will print undefined.
For function it will look for its call. where the function is called it will go for that.  it will go line by line. when it will found one more function is called in a function it will go for that one and skip others.

**Note**: To avoid error declare variables at the top of the document.

```JavaScript
// Example of Hoisting.

func(); // Function is called before creation. But it will execute properly.
console.log(a = 30); // variable is printed before declaration.
var a; // Variable is declared after using it.
function func(){ /// function is created after it is used.

  a(); // a function is called inside a function. it will go for it and skip the line below.
  console.log('this is a primary function');
};

function a(){ // this function is called on another function;
  console.log('this is a nested function');
};

newFunc(); // it will return undefined
let newFunc = one; // function assigned to a variable.
function one(){
  console.log('new function');
};
newFunc(); // it will return its real value.


// Hoisting in variables with let and var
console.log(a); // give an error.
let a; // a is declared to undefined;
console.log(a);
a = 'bangladesh'; // a is assigned a value;
console.log(a);

console.log(b); // b is declared to undefined;
var b = 'bangladesh'; // b is assigned a value;
console.log(b);
```

**Note**: For details on printing priority look at scope Example underneath this.

</details>

<!------------------------------------------------------
## #######     JAVASCRIPT SCOPE  #######
-------------------------------------------------------->

<details>
<summary><b> JavaScript Scope </b></summary>
<b>Scope</b> is Block {}. A variable or a function can be remembered, accessed  or called from where that is scope. Scope determines the accessibility of variables, objects, and functions from different parts of the code.
<br><br>

**Lexical Scope**:
 JavaScript Compiler tokenize every word variable, valued and functions that's called **_Lexim_**
 When Compiler start leximing Compiler fix scope for every variable, values, functions. This core scoping concept is called **_Lexical Scope_**. <br><br>
**Scope Chain**:  scope chain is relational scope.
Relation between scopes like  parents, child, siblings is scope chain.
scope chain means maintain a chain between parents, child and siblings.

```JavaScript
// Example of scope chain.

      var a = 11;
      function A(){

          var b = 12;

          function B(){
            var c = 23;
            console.log(c); // Printed Third c->23
            // Whatever Scope Parent A Has That will Automatically handed over to its child.
            // D() can be called from A(), SO it can be called from Here too
            D(c); // Printed Fourth c-> 23 + a->11 = 34;
          };

          function C(){
            var d = 56;
            console.log(d); // Printed Fifth d->56;
            // Whatever Scope Parent A Has That will Automatically handed over to its child.
            // D() can be called from A(), SO it can be called from Here too
            D(d); // Printed Seventh d->56 + a->11 = 67;
          };


          console.log(b);  // Printed First. b->12
          D(b); // Printed Second b->12 + a->11 = 23;
          B(); // Printed Third c->23
          C(); // Printed Fifth d->56;
      };

      function D(n){
        let r =  n + a;
        console.log(r);
      };
      A();

      // SCOP IN JAVASCRIPT
      // A => a, b, B(), C(), D(), A();
      // B => a, b, c, C(), B(), D(), A();
      // C => a, b, d, C(), B(), D(), A();
      // D => a, n, A(), D();
      // Result => 12, 23, 23, 34, 56,67
```

</details>

<!------------------------------------------------------
## ##     var, let, const Strict Mode   ########
-------------------------------------------------------->

<details>
<summary><b> var, let, const, strict mode</b></summary>

```JavaScript

```

</details>

<!------------------------------------------------------
#######     JAVASCRIPT CLOSURE     ######
-------------------------------------------------------->

<details>
<summary><b> JavaScript Closure</b></summary>

**_Closure:_** Closure is when function is able to remember and access its lexical scope even When the function executing outside of its lexical scope.
A closure is  a function having access to the parent scope, even after the parent function has closed.

```JavaScript
// Example of Closure.
var a = (function(){
  var counter = 1;
  return function(){
    return counter++;
  }
})(); // Self Invokable Function.
console.log(a()); // return 1
console.log(a()); // return 2
console.log(a()); // return 3var a = 20; // Store a as a global scope


var f = function(){
  var b = 10;

  function d(){
    var c = 30;
      let one =  a + b + c; // store b as its closure
      console.log(one);

      function g(){
            let d = 40;
            let two = a + b + c + d; // store b & c as its closure.
            console.log(two);

                 function h(){
                     let l = 40;
                     let three = a + b + d + l;
                     // store a, b, c, d as clousure. thought c is not used.
                     // c is coming here from d(). when collect data from g() , c is Automatically coming.
                     console.log(three);

                         function i(){
                             let k = 40;
                             let four = a + b + d + c;
                             // store b , d, c as closure.
                             // l is skipped cos l is not used here.
                             console.log(four);
                         }
                         i();
                         console.dir(i);
                 }
                 h();
                 console.dir(h);
      }
      g();
      console.dir(g);
  }
  d();
  console.dir(d);
}
f();
console.dir(f);



(function() { // self invokable function
  var a = 20;
  var b = 10;

  var sum = function() {
    return a + b;
  };
  console.log(sum()); //value  a = 20, b = 10;
  console.dir(sum); // took the reference a = 30, b = 40; though it is changed letter. but it got it before changed.

  a = 30;
  b = 40;
  console.log(sum()); //value a = 30, b = 40;
  console.dir(sum); //took the variable reference
})();

for(let i = 0; i <= 4; i++){
  const one = () => {
    console.log(i);
  }
  one();
  console.dir(one);
};
for(let i = 0; i < 3; i++){
  const one = () => {
    console.log(i);
  }
  console.log(i); // here let i is block scope.
  console.dir(one);
  // when it run first time i = 0, second time i = 1; and third i = 2;
  // everytime i got new value and new i variable is declaring.
  setTimeout(one, 2000);
}
console.log('after for loop');
for(var a = 0; a < 3; a++){
  const one = () => {
    console.log(a);
  }

  console.log(a); // here var a is global scope.
  console.dir(one);
  // when it run every time a got its reference value. the last changed value.
  setTimeout(one, 2000);
}
console.log('after for loop');
```

</details>

<!------------------------------------------------------
## #######     OBJECT ORIENTED PROGRAMMING  #######
-------------------------------------------------------->

<details>
<summary><b>Object Oriented Programming</b></summary>
<br>
OOP is a programming diagram based on object. Basic concepts of OOP.
<a href="https://blog.10minuteschool.com/jhankar-mahbub-programminger-bolod-to-boss-oop/">Basic Concepts Of OOP in Bangla.</a><br><br>

__Object__: When we talk about OOP, the first thing comes in mind what is object. Object: Anything which takes multiple properties to describe is object. Like a person is a objet. How can you describe?  Name : sharif, Profession : web developer, Age : 27, Height : 5.10, eat ( rice, food, drink), work(eat, walk, write code, sleep, gossip). So when you want to describe anything - if that needs multiple things comes in mind to describe, that is an object. like book, car, mobile, computer, house etc; 
```javascript
class person{
        constructor(name, profession, age){
        this.name = name,
        this.profession = profession,
        this.age = age
        }
}
```
__Property__: Properties are like noun or adj what can describe any object. Any variables are properties in object.thing that can describe an object thats are property like name, profession, age, height.
<br>

__Methods__: Methods are like verb. When you wand to describe anything of object that is running and continue is methods. Functions are methods. Like person eat, walk, sleep, work that eat function, walk function, sleep function, work function. In OOP we will call it method.
<br>

__Class__: When using a pattern you will produce multiple object that is class. Like person is patten. a person has name, age, profession, height. this is pattern. Now sharif, remon, abrar, mahmud are object. all have their own name, age, profession, height and some extra thing. but the main pattern is same for all. this pattern is class.
<br>

__Abstraction__:
<br>

__Encapsulation__: 'আবদ্দ করা', 'নিজের ঘরের কি হয় তা অন্নকে জানতে না দিয়ে কাজ করা হল' Encapsulation. Its like capsule. We do not know what is inside. but we will give input that that will provide output.
<br>

__Inheritance__: 'উত্তরাধিকার', when we get something from parents and we can extend it by ourself that is inheritance. Like your father give your land. and you build a home for you on that land. This is called inheritance. in our example person is a pattern. when we extend it like sharif have his name, age, profession, height. But sharif may have some more property or methods. sharif can extend it. This process is Inheritance.<br>
<a href="http://habluderadda.com/concepts/oop/polymorphism.html"> More About Inheritance In Bangle</a>
<br>

__Polymorphism__: Means 'বহুরূপী', 'একটা কাজ অনেক ভাবে করা যায়। কিভাবে করল তা বেপার না। কাজ করাটা আসল। Thats call Polymorphism.
<br>

</details>
