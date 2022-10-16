type calc=(a:number,b:number)=>number;

//array of Function type
const calculator:calc[] = [];
calculator.push(
    (a,b)=>a+b
);
calculator.push(
    (a,b)=>a-b
);
calculator.push(
    (a,b)=>a*b
);
calculator.push(
    (a,b)=>a/b
);

calculator.forEach(value=>console.log(value((Math.random()*10),(Math.random()*10))));
