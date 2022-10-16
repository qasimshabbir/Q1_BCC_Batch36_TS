"use strict";
let arr1 = ["a", "b", 'c'];
let arr2 = [2, 3, 4];
let arr3 = [arr1, arr2]; //combine 
let arr4 = [...arr1, ...arr2];
console.log(arr3);
console.log(arr4);
