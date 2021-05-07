 
     const BTN = document.querySelector('#myBtn');
     const RESULT = document.querySelector('.text');
     const INPUT = document.getElementById('input').value;

BTN.addEventListener('click', function(){

        
    let result = "Hello";
       RESULT.innerHTML = result;
 
 });
 function sum(a,b){
    return a+b
}

function multiply(a,b, func){

    let c = a + b;
    let d = a - b;

    return function(){
           var m = func(a, b);
          return c * d * m
    }

}
var myFunc = multiply(4,3,sum);
console.log(myFunc());