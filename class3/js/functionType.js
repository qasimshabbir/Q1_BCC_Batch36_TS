"use strict";
//type define
let left;
let right;
let calc;
//value assign
left = 20;
right = 20;
calc = (a, b) => a + b;
console.log("add ", calc(left, right)); //execution call
calc = (a, b) => a - b;
console.log('subtract', calc(left, right)); //execution call
calc = (a, b) => a * b;
console.log('subtract', calc(left, right)); //execution call
calc = (a, b) => a / b;
console.log('subtract', calc(left, right)); //execution call
function calculate(mt) {
    console.log(mt(20, 30)); //execution or call
}
calculate(calc); //mt define
console.log("POW");
calculate((a, b) => a ** b); //mt define
