let sum;
let sub = function (a, b) {
    sum = a - b;
    return sum;
}
let add = function(a, b) {
    sum = a + b;
    return sum;
}
function exponention(a, b) {
    sum = a * b;
    return sum;
}
function dividend(a, b) {
    sum = a / b;
    return sum;
}
export { sub, add, exponention, dividend };