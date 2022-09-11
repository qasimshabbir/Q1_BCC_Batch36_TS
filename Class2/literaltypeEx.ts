
function calculate(
    left: number, 
    right: number, 
    operation: "+"|"x"|"/"|"-") {
    let result: number;
    switch(operation){
        case "+":
            result =  left+right;
            break;
        case "-":
            result = left - right;
            break;
        case "x":
            result = left * right;
            break;
        case "/":
            result = left / right;
            break; 
    }
    return result; 
}
const c:'add' = 'add';

console.log(calculate(2,3,"+"));
console.log(calculate(30,50,"-"));
console.log(calculate(50,20,"x"));
console.log(c);