function printTable(times: number , ...tables: number[]):string {// 2, 4
    for (let table of tables) {
        for ( let i = 1; i <= times; i++) {
            console.log(table +" x " +i + " = " +i*table)
        }
    }
    return "true";
}

let times:number = 2;
let tables = [2, 5, 6]
printTable(times,2,5,6,7,8,9,10 );