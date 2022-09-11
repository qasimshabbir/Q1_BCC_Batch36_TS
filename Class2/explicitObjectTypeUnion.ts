type Car = {
    model:string,
    make: string,
    noOfDoors: number,
    kick?:boolean    
}
type Bike = {
    model: string,
    make: string,
    noOfDoors?: number,
    kick: boolean
}

type Honda = Car|Bike;
const CDCivic:Honda = Math.random()>0.5?
        {
            model: '2022',
            make: 'Civic',
            noOfDoors: 4
        }:
        {
            model:'2020',
            make: 'CG125',
            kick: false
        };
    
console.log(CDCivic.make,CDCivic.model);