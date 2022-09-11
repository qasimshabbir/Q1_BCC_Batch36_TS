type ACar = {
    model:string,
    make: string,
    noOfDoors: number,
        
}
type ABike = {
    model: string,
    make: string,
    kick: boolean
}

type aHonda = ACar&ABike;
const ACDCivic:aHonda = Math.random()>0.5?
        {
            model: '2022',
            make: 'Civic',
            noOfDoors: 4,
            kick: false
        }:
        {
            model:'2020',
            make: 'CG125',
            kick: true,
            noOfDoors: 0
        };
    
console.log(ACDCivic);