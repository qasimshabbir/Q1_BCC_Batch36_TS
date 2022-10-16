type TaskType = {
    id:number,
    date:Date,
    task:string,
    isComplete: boolean
}

let task2:TaskType = {
    id:2,
    date: new Date("10/10/2022"),
    task:'Coding typescript',
    isComplete:false
   
}

const tasks:TaskType[] = [];
tasks.push(task2);
tasks.push(
    {   
        id:1,
        date:new Date(),
        task:'Sleeping',
        isComplete: false,
        
    }
)
function completeTasks(task:TaskType){
    if(task.isComplete){
        return true;
    }
    return task.isComplete;
}
let noOfcompletedTasks:number=0;
let noOfInCompleteTasks:number=0;
for(let i=0;i<tasks.length;i++){
    if(tasks[i].isComplete){
        noOfcompletedTasks++;
    }else{
        noOfInCompleteTasks++;
    }
}
console.log("Completed Tasks ="+noOfcompletedTasks)
console.log("Incomplete Tasks = "+noOfInCompleteTasks);
const completedTasks = tasks.filter(task=>completeTasks(task));
const inCompleteTasks = tasks.filter(task => !task.isComplete);

console.log(tasks);
tasks[1].isComplete = true;
console.log(tasks)
