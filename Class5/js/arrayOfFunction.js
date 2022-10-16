"use strict";
//array of Function type
const calculator = [];
calculator.push((a, b) => a + b);
calculator.push((a, b) => a - b);
calculator.push((a, b) => a * b);
calculator.push((a, b) => a / b);
calculator.forEach(value => console.log(value((Math.random() * 10), (Math.random() * 10))));
