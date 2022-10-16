let arr1 = ["a","b",'c'];
let arr2 = [2,3,4]; //0x002
let arr3 = [arr1,arr2];//combine 
let arr4 = [...arr1,...arr2];
let arr5 = arr2; 


console.log(arr3.length); //2
console.log(arr4.length); //6