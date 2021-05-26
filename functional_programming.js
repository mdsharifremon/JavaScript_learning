// functional programming 
/*********************************************************
 * 1. Pure Function // one input to one output.
 * 2. Function Composition // one function can be send by parameter to another function.
 * 3. Shared State  // You will not share any data with others
 * 4. Mutable Date  // You have to avoid modify parameter of the function.
 * 5. Side Effect   // There should not be any side effect on other code. or other function.
 *********************************************************/


/***********************************************************
 * First Class Function
 * if any function is related to these points that is first class function
 * 1. a function can be stored in a variable
 * 2. a function can be stored in an array.
 * 3. a function can ber stored in an object
 * 4. we can create function as need
 * 5. we can pass function as parameter
 * 6. we can return function from another function. 
 *********************************************************/

function sayName (name){
    return  `Hello ${name}`;
}
// 1. sayName function is stored in  variable hello 
let hello = sayName('sharif'); // sayName function is called and stored in a variable
let fun = sayName // sayName function is send by a reference to fun variable
console.log(hello);
console.log(fun); // fun will return a function (sayName). but it will not call that function
console.log(fun('remon'))// fun function is called where it got reference of sayName;


var arr = ['one', 'twl'];
arr.push(sayName);
// 2. sayName function is stored in arr array.
console.log(arr);


var obj = {
    id : 2, 
    name : 'karim',
    func : sayName,
}
// 3. sayName function is stored in obj Object.
console.log(obj.func('remon')); 

var sum = 10 + (function (){ return 10; })(); // 4. we created the function as we need it
console.log(sum);


function hi(name,para){
    return para(name);
}
let helloName = hi('sharif', sayName); // 5. SayName function is send by parameter.  
console.log(helloName);



function base(b){
    return function (n){  // 6.  Return a function in a function
        var result = 1; 

        for(var i = 0; i < b; i++){
            result *= n;
        }
        return result;
    }
}
// Example of function composition.
// var power = base(3);
// var result = power(10);
var result = base(3)(10); // call the function and give parameter of returnable function.
console.log(result);


/***********************************
 * Inner Function or Nested Function
 * 
 *************************************/
function outer(){
    function inner(){
            console.log('i am inner function');
    }inner();
    console.log('i am a outer function');
}
outer();


// Example Of Inner/ Nested Function
function myFunc(a, b){

    // function add(){
    //     return a + b; // 15
    // }
    // function sub(){
    //     return a - b; // 5
    // }
    // function multiple(){
    //     return a * b; // 50
    // }
    // function div(){
    //     return a / b; // 2
    // }
    // return add() + sub() + multiple() + div(); // 15 + 5 + 50 + 2;

    let f = () =>  a + b;  
    let e = () =>  a - b; 
    let g = () =>  a * b; 
    let h = () =>  a / b; 
    return f() + e() + g() + h();

}

let myResult = myFunc(10,5);
console.log(myResult);


/******************************
 * Higher Order Function 
 * a function should be pure function to make it higher order function 
 * Callback Function is higher order function
 * when a function return a function is higher order function
 * When function can take a function as a parameter is higher order function
 ******************************/

var array = [ 4,5,6,7,8];
let mySum = 0;
array.forEach(function(i){
    mySum += i;
    console.log(mySum);
});





