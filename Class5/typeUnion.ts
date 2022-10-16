type vehicle = {
    tyre:number;
    name:string;

}
type motorbike = {
    brake:boolean;
    engine:string;
    name: string;
}

type car ={
    door: number;
 
}
let honda125: vehicle|motorbike ={
    tyre:2,
    engine:"125cc",
    
}

console.log(honda125);
let bike: vehicle & motorbike={
    tyre:2,
    name:"A New Templte",
    brake: true,
    engine: "Honda 123"
}

