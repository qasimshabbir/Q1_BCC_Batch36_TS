export {};
let yearAndWar:[number,string];
yearAndWar = [1942,"World War 2"];

//assign
let calcParam:[number,number] = [20,30];
//npcalcParam=[22,322,23];

function add(a:[number,number]){
    return a[0]+a[1];
}
console.log(add(calcParam));

function subtract(a:number,b:number){
    return a-b;

}
calcParam[0] = 40;
calcParam[1] = 50;

subtract(...calcParam);
add([39,20]);
