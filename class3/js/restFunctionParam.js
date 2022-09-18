"use strict";
function sum(...nos) {
    let result = 0;
    // for(let i=0;i<nos.length;i++){
    //     result+=nos[i];
    // }
    result = nos.reduce((total, no) => {
        console.log(total, no);
        return total + no;
    });
    return result;
}
console.log(sum(2, 23, 23, 23, 23, 23, 23, 23, 23, 23, 2311, 231));
