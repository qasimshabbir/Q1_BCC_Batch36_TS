export {}
type oCar = {
    model:string,
    make: string,
    noOfDoors: number,
}
type oBike = {
    model: string,
    make: string,
    kick: boolean
}

type oHonda = oCar|oBike;
const oCDCivic:oHonda = 
        {
            model: '2022',
            make: 'Civic',
            noOfDoors: 4
        };
const oCG125: oHonda = 
        {
            model:'2020',
            make: 'CG125',
            kick: false
        };

function show(vehicle: oHonda){
    
    if("kick" in vehicle){
        
        console.log(vehicle.model,vehicle.make,vehicle.kick);
    }else if("noOfDoors" in vehicle){
        
        console.log(vehicle.model,vehicle.make,vehicle.noOfDoors);
    }
}       
show(oCDCivic);
show(oCG125);

