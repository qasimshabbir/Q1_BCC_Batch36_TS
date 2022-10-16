"use strict";
const ar = [23, 23, 2, 32, 23, "32"];
const ar1 = [203, 23, 23, 23, 23];
const ar2 = [20, 302, 33, 32.33];
let calc1 = [];
function add(a, b) {
    return a + b;
}
calc1.push(add);
calc1.push((a, b) => a - b);
calc1.push((a, b) => a * b);
calc1.forEach(func => showResult(func));
function showResult(res) {
    console.log(res(20, 30));
}
