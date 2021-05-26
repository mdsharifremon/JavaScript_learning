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