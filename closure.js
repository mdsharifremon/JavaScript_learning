var a = 20; // Store a as a global scope
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
  // when it run every time a got its referance value. the last changed value.
  setTimeout(one, 2000);
}
console.log('after for loop');
