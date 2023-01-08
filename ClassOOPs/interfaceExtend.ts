interface Person{
    name:string;
    age:number|null|undefined|string;
}
interface Person{
    city:string;
    country:string;
}
interface Student extends Person{
    class:string;
    school:string;
}
interface Teacher extends Person{
    age:number|string;
    school:string;
    course:string;
}


let qasim:Teacher = {
    name:'Qasim',
    school:"ABC",
    age:20,
    course:"Blockchain",
    city:"Karachi",
    country:"Pakistan"
};

let hamzah:Student = {
    name:'Qasim',
    school:"ABC",
    age:20,
    class:"Blockchain",
    city:"Karachi",
    country:"Pakistan"
}