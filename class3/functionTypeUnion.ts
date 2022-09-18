export {};

let returnNumberOrString : (a:number,b:number)=>number|string;
returnNumberOrString = (a,b)=>{
    if(a > 0){
        return a+b;
    }else{
        return "Unable to add";
    }
};
let returnCalcOrUndefined: ((a:number,b:number)=>number)|string;

returnCalcOrUndefined = "Nothing";
returnCalcOrUndefined = (a,b)=>a+b;

