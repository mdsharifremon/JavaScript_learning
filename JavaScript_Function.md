# JavaScript Function

* [Pure Function](#pure-function)
* [First Class Function](#first-class-function)
* [Higher Order Function](#higher-order-function)
* [Function Expression](#function-expression)
* [Anonymous Function](#anonymous-function)
* [Function Return Function](#function-return)
* [Arrow Function](#arrow-function)
* [Self Invokable Function](#invokable-function)

<a name='pure-function'></a>
## Pure Function

__1. Return the same result if given argument is same.__ <br>
__2. Does not cause any observable side effect.__<br>
__3. Does not change the global scope value.__

```javascript
 function myFunction(a,b){
     return a+b
 }
 console.log(myFunction(5,5));
```

<a name='first-class-function'></a>
## First Class Function

__1. A function can be stored in a variable.__ <br>
__2. A function can be stored in a array.__ <br>
__3. A function can be stored in a object.__ <br>
__4. We can create function as need(eg: Anonymous Function).__<br>

```javascript
 1. var sum = function(a,b){
     return a+b
 }
 console.log(sum(5,5));
 1. var add = sum
 console.log(add(5,5));

 2. var arr = [];
 arr.push(add);
 console.log(arr[0](5,5));

 3. var obj = {
     addition : add,
 }
 console.log(obj.addition(5,5));

 4. setTimeOut(function(){
     console.log('I will be triggered after 3 second')
 },3000);
```

<a name='higher-order-function'></a>
## Higher Order Function

__1. We can pass function as argument.__<br>
__2. We can return a function from another function.__

```javascript
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
```
<a name='function-expression'></a>
## Function Expression
<a name='anonymous-function'></a>
## Anonymous Function
<a name='function-return'></a>
## Function Return Function
<a name='arrow-function'></a>
## Arrow Function
<a name='invokable-function'></a>
## Self Invokable Function
