export
interface Poet{
    name:string;
    born?:number;
    type: 'Poet'|'Writer';
}

let ghalib: Poet;

ghalib = {
    name: "Ghalib",
    born: 1700,
    type: 'Poet',
}

let allamaIqbal:Poet ={
    name: "Allama Iqbal",
    type: 'Poet'
}

let anwarMaqsood:Poet ={
    name: "Anwer Maqsood",
    type: 'Writer'
}
printPoet(ghalib);
printPoet(allamaIqbal);
printPoet(anwarMaqsood);

function printPoet(poet:Poet){
    console.log("The great ",poet.type," ",poet.name," born at ",poet.born);
} 
