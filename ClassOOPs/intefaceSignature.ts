//type calculator = (left:number,right:number)=>number;
interface calculator {
    (left:number,right:number):number;
}
const add:calculator = (left:number,right:number)=>left+right;
const sub:calculator = (left:number,right:number)=>left-right;
const div:calculator = (left:number,right:number)=>left/right;
const mul:calculator = (left:number,right:number)=>left*right;

console.log(add(20,30));
console.log(sub(20,30));
console.log(div(20,30));
console.log(mul(20,30));

