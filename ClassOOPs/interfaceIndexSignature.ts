export
interface Num{
    isNumber:boolean;
    [i:string]:number|boolean;
    
}
let num1:Num ={
    isNumber:true,
    a:0,
    b:1,
    c:2,
    d:10,
    e:40,
};
num1.abc=30;