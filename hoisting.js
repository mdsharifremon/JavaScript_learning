
var sum = 0;
function one(a){

  return function(b){
    return a + b;
  }
}
var temp = one(2);
sum = sum + temp(6);
console.log(sum);
