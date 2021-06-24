/**
 * Asynchronous JavaScript
 */

// let one = 1;
// let two = 2;
// function sum(a,b) {
//     console.log(a + b);
// }

// console.log('hello i am the first statement');
// console.log('I am the second statement');

// for (let i = 0; i <= 2; i++){
//     setTimeout(() => {
//         console.log('I will run after 3 second' + i);
//     }, 3000);
// }

// sum(one, two);

// In Asynchronous operation value can not be stored in a variable. It will return undefined

function func(name) {
    let one;
    setTimeout(() => {
     one = name;
    }, 3000);
    return one;
}
let output = func('sharif');
console.log(output);


function newFunc(name) {
    setTimeout(() => {
        let one = name;
        console.log(one);
    }, 3000)
}

newFunc('remon');
