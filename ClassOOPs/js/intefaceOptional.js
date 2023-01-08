"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ghalib;
ghalib = {
    name: "Ghalib",
    born: 1700,
    type: 'Poet',
};
let allamaIqbal = {
    name: "Allama Iqbal",
    type: 'Poet'
};
let anwarMaqsood = {
    name: "Anwer Maqsood",
    type: 'Writer'
};
printPoet(ghalib);
printPoet(allamaIqbal);
printPoet(anwarMaqsood);
function printPoet(poet) {
    console.log("The great ", poet.type, " ", poet.name, " born at ", poet.born);
}
