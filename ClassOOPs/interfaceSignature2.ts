export

interface calculator {
    result: number;
    (a:number,b:number): void;
}


let calc: calculator;

function math(a:number,b:number) {
    math.result = a-b;
    console.log("Math resutl is "+math.result);
}
 math.result = 0;
 calc= math;
 calc(20,30);
 