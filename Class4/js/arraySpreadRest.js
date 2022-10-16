"use strict";
const soldiers = ["a", "b", "c"];
const ages = [20, 30, 30];
const combine = [...soldiers, ...ages];
console.log(combine);
function logWariors(greet, ...names) {
    names.forEach(name => (console.log(greet, name)));
}
logWariors("Hello ", "Jawed", "Hamza", "Muzafar");
