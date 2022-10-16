export {}
type Transaction ={
    date:Date,
    title: string,
    amount: number,
    type: "Expense"|"Income"
    showExpense():void;
}

const tracker:Transaction[] = [];

function addExpense(title:string,amount:number,date:Date){
    tracker.push({
        date: date,
        title: title,
        amount: amount,
        type: "Expense",
        showExpense(){
            if(this.type==="Expense")
            console.log(title+": "+amount)
        }
    });
}

function addIncome(title:string,amount:number,date:Date){
    tracker.push({
        date: date,
        title: title,
        amount: amount,
        type: "Income",
        showExpense(){
            if(this.type==="Expense")
            console.log(title+": "+amount)
        }
    });
}
addIncome("Get Salary",100000,new Date("01/10/2022"));
addExpense("Buy biscuts",-200,new Date("01/10/2022"));
addExpense("Buy Shoes",-200,new Date("01/10/2022"));
addExpense("Buy Clothe",-200,new Date("01/10/2022"));
addExpense("Buy gorcery",-200,new Date("01/10/2022"));
addExpense("Buy biscuts1",-200,new Date("01/10/2022"));
addExpense("Buy biscuts2",-200,new Date("01/10/2022"));
addExpense("Buy biscuts3",-200,new Date("01/10/2022"));
addExpense("Buy biscuts4",-200,new Date("01/10/2022"));
addExpense("Buy biscuts5",-200,new Date("01/10/2022"));
console.log(tracker);
let totalExpense =0;
let totalIncome = 0;
for(let i=0;i<tracker.length;i++){
    tracker[i].showExpense();
  tracker[i].type==='Income'?
    totalIncome+=tracker[i].amount:
    totalExpense+=tracker[i].amount;
  
}
console.log("Total Income is "+totalIncome);
console.log("Total Expense is "+totalExpense);
console.log("Balance is "+(totalIncome+totalExpense));
let buyShoes = tracker.findIndex(trans => trans.title==="Buy Shoes");
console.log(buyShoes);
let arr = [22.23232,323,232,23,232].findIndex(value=>value===23);
console.log(arr);