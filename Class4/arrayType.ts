const ar = [23,23,2,32,23,"32"];
const ar1:number[] = [203,23,23,23,23];
const ar2:Array<number> = [20,302,33,32.33];

type calc = (a:number,b:number)=>number;
let calc1 : (calc)[] = [];

function add(a:number,b:number){
    return a+b;
}
calc1.push(add);
calc1.push((a,b)=>a-b);
calc1.push((a,b)=>a*b);

calc1.forEach(func=> showResult(func));
function showResult(res:calc){
    console.log(res(20,30));
}
