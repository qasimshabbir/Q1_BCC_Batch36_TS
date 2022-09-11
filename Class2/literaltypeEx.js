function calculate(left, right, operation) {
    var result;
    switch (operation) {
        case "+":
            result = left + right;
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
var c = 'add';
console.log(calculate(2, 3, "+"));
console.log(calculate(30, 50, "-"));
console.log(calculate(50, 20, "x"));
console.log(c);
