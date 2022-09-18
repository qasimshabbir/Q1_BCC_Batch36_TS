//type define
let left: number;

let right: number;
//let calc = (left:number,right:number)=>number;
type tCalc = (left:number,right:number)=>number;
let calc:tCalc;

//value assign
left = 20;
right = 20;

calc = (a,b)=>a+b;
console.log("add ",calc(left,right));//execution call
calc = (a,b)=>a-b;
console.log('subtract',calc(left,right));//execution call
calc = (a,b)=>a*b;
console.log('subtract',calc(left,right));//execution call
calc = (a,b)=>a/b;

console.log('subtract',calc(left,right));//execution call

function calculate(mt:tCalc){
    console.log(mt(20,30));//execution or call
}
calculate(calc); //mt define
console.log("POW");
calculate((a,b)=>a**b); //mt define
