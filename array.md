# JavaScript Array

## Array Traversing
```javascript
const ARR = [1,2,3,4,5,6,7,8,9,10];

*** Find the sum of an array ***
let sum = 0;
let i;
for(i = 0; i < ARR.length; i++ ){
    sum += ARR[i];
}
console.log(sum);
let newSum = ARR.reduce(function(a,b){
    return a + b;
},0);
console.log(newSum);

*** Find Average Of An Array. ***
console.log(sum / ARR.length);

*** Find Maximum Number of an Array ***
let max = 1;
for(i = 0; i < ARR.length; i++){
    if(max < ARR[i]){
      max = ARR[i];
    }
}
console.log(max);
// Max number with apply method
console.log(Math.max.apply(null,ARR));
// Max number with ES6 spread operator
console.log(Math.max(...ARR));


*** Find minimum Number of an Array ***
let min = 9;
for(i = 0; i < ARR.length; i++){
    if(min > ARR[i]){
      min = ARR[i];
    }
}
console.log(min);
// Min number with apply method
console.log(Math.min.apply(null,ARR));
// Min number with ES6 spread operator
console.log(Math.min(...ARR));

const names = ['sharif', 'remon', 'abrar', 'mahmud', 'jobayer'];
```
## Array Fill

```javascript
let num = new Array(9);
for(let i = 0; i < num.length; i++){
    const rand = Math.round(Math.random() * 10 + 1);
  num[i] = 5 < rand ? 'X' : '0';
}
console.log(num);

// Array Update
function update(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = (i+1) + '. ' + arr[i];
    }
    return arr;
}
let arr;
console.log(arr = update(names));
console.log(names);
if(arr == names){
    console.log('array matched')
}
```
## Array of Functions
```javascript
let Sum = (a,b) => a + b;
let Sub = (a,b) => a - b;
let times = (a,b) => a * b;
let mod = (a,b) => a % b;
let div = (a, b) => a / b;
let funcArr = [Sum, Sub, times, mod, div]

let a = 30;
let b = 10;
for(let i = 0; i < funcArr.length; i++){
    let result = funcArr[i](a,b); 
    console.log(`${funcArr[i].name}` + ' = ' + result);
}
```

## Matrics of array 
```javascript
const MATRICSA = [
    [3,5,7,2,4,6],
    [6,5,4,2,8,4],
    [1,9,5,4,6,2],
]; 
const MATRICSB = [
    [7,5,3,8,6,4],
    [4,5,6,8,2,6],
    [9,1,5,6,4,8]
]; 

let Msum = (a,b) => {
    let result = [];
    for(let i = 0; i < a.length; i++){
       let row = [];
        for(let j = 0; j < a[i].length; j++){
            let val = a[i][j] + b[i][j];
            row.push(val);
       }
       result.push(row);
    }
    return result;
}
console.log(Msum(MATRICSA,MATRICSB));
```
## Array Insert 
```javascript
let arr = [1,2,3,4];
let arr1 = [5,6,7,8];

*** Insert At last *** 
arr[arr.length] = 5; // static Way
console.log(arr);

arr.push(6); // Array push method
console.log(arr);

// Insert a array in a array

arr.push(...arr1); //ES6 Spread Operator
console.log(arr);

Array.prototype.push.apply(arr, arr1); // old school way
console.log(arr);

// If directly push array it will insert a child array in an array
arr.push(arr1);
console.log(arr);


*** Insert value at the beginning ***
let arr = [6,7,8,9];
let arr1 = [1,2,3,4]

arr.unshift(5); // unshift() method
console.log(arr);

arr.unshift(...arr1) // ES6 spread operator 
console.log(arr);

Array.prototype.unshift.apply(arr,arr1); // old school way
console.log(arr);

*** Insert in the middle ***
let arr = [1,3,5,6,9];
let arr1 = [7,8,9];

arr[1] = 2;
console.log(arr); // static way

arr.splice(1, 0,2);
console.log(arr); // static way

arr.splice(4,0,...arr1);
console.log(arr); // ES6 way
```

## update array value.
```javascript
// array of object
let students = [
    {id : 3, name : 'sharif'},
    {id : 1, name : 'rahim'},
    {id : 5, name : 'karim'},
    {id : 4, name : 'remon'},
    {id : 2, name : 'jobayer'}
]
console.log(students);

// When id is 5, update his name to abbas.

for(let i = 0; i < students.length; i++){
    if(students[i].id == 5){
        students[i].name = 'abbas'
        break;
    }
};
console.log(students);
```

## Delete array value 
```javascript

const NUM = [1,2,3,4,5,6,7,8,9,10];

/// Remove First Value ///
NUM.shift();
console.log(NUM);

// Remove Last Value
NUM.pop(); // Pop Method
console.log(NUM);

NUM.length = NUM.length - 1; // Decrease Length 
console.log(NUM);

// Remove indexed value / Middle Value
NUM.splice(2,2); // From index 2 to 2 value deleted.
console.log(NUM);

const NUM1 = [1,2,3,4,5,6,7,8,9,10];
const DEL = 6;

// When value is 6. delete that value.
for(let i = 0; i < NUM1.length; i++){
    if(NUM1[i] == 6){
        NUM1.splice(i,1);
    }
};
console.log(NUM1);

let num = [1,2,3,4,5,6,7,8,9,10];
let del = 6;
num = num.filter((item) => item !== del ); // filter methods
console.log(num);

// Reset a array 

let x = [1,3,4,5];
let y = x;
x = []; // Only reset the x array.
console.log(x, y);

let xx = [1,3,4,5];
let yy = xx;
xx.length = 0; // reset both array.
console.log(xx,yy);

// reset with loop
let a = [3,4,5,6,7]
let b = [3,4,5,6,7]
for(; a.length;){
    a.pop();
}
console.log(a);

while(b.length){b.pop();};
console.log(b);
```

## Array Merge

```javascript
let a = [1,2,3,4];
let b = [5,6,7,8];

let c = a.concat(b); // simple concat method
console.log(c);

let d = [].concat(a,b,c); // merge multiple array at a time.
console.log(d);

let e = [...a, ...b]; // spread operator
console.log(e);
```

## Slice Method 

```javascript
let arr = [1,2,3,4,5,6];
let arr1 = arr.slice(2,5); // slice from an array
console.log(arr1);

let clone = arr.slice(); // clone a new array 
console.log(clone);

// convert array like object to array

function arg(){
 return Array.prototype.slice.call(arguments);
}

let func = arg(3,4,5,6,'num'); // convert arguments into array
console.log(func);
console.log(func.__proto__.constructor);
```