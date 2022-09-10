function add(num1, num2) {
    if( typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    }else{
        return "Invalid value!"
    }
    
}
console.log(add('2', '3'));
console.log(add(2, 3));
