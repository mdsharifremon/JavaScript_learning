
     const BTN = document.querySelector('#myBtn');
     const RESULT = document.querySelector('.text');
     const INPUT = document.getElementById('input').value;
BTN.addEventListener('click', function(){

});
var a = (function(){
  var counter = 1;
  return function(){
    return counter++;
  }
})();
console.log(a());
console.log(a());
console.log(a());
