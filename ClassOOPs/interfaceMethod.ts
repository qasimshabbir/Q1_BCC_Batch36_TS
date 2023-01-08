export
interface Poet{
    name:string;
    born?:number;
    type: 'Poet'|'Writer';
    showMe():string;
    show?:(poet:Poet)=>string;
}

let ghalib: Poet;

ghalib = {
    name: "Ghalib",
    born: 1700,
    type: 'Poet',
    showMe(){
        return "The great "+this.type+" "+this.name+" born at "+this.born;
    },
    show: (poet:Poet)=>{
        return "The great "+poet.type+" "+poet.name+" born at "+poet.born;
    }
}

let allamaIqbal:Poet ={
    name: "Allama Iqbal",
    type: 'Poet',
    showMe(){
        return "The great "+this.type+" "+this.name+" born at "+this.born;
    }
}

let anwarMaqsood:Poet ={
    name: "Anwer Maqsood",
    type: 'Writer',
    showMe(){
        return "The great "+this.type+" "+this.name+" born at "+this.born;
    }
}
printPoet(ghalib);
printPoet(allamaIqbal);
printPoet(anwarMaqsood);

function printPoet(poet:Poet){
    console.log(poet.showMe());
    if(poet.show!==undefined){
        console.log(poet.show(poet));
    }
} 
