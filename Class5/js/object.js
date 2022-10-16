"use strict";
let task2 = {
    id: 2,
    date: new Date("10/10/2022"),
    task: 'Coding typescript',
    isComplete: false
};
const tasks = [];
tasks.push(task2);
tasks.push({
    id: 1,
    date: new Date(),
    task: 'Sleeping',
    isComplete: false
});
console.log(tasks);
tasks[1].isComplete = true;
console.log(tasks);
