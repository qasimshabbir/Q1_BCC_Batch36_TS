"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ghalib;
ghalib = {
    name: "Ghalib",
    born: 1700,
    type: 'Poet',
    showMe() {
        return "The great " + this.type + " " + this.name + " born at " + this.born;
    },
    show: (poet) => {
        return "The great " + poet.type + " " + poet.name + " born at " + poet.born;
    }
};
let allamaIqbal = {
    name: "Allama Iqbal",
    type: 'Poet',
    showMe() {
        return "The great " + this.type + " " + this.name + " born at " + this.born;
    }
};
let anwarMaqsood = {
    name: "Anwer Maqsood",
    type: 'Writer',
    showMe() {
        return "The great " + this.type + " " + this.name + " born at " + this.born;
    }
};
printPoet(ghalib);
printPoet(allamaIqbal);
printPoet(anwarMaqsood);
function printPoet(poet) {
    console.log(poet.showMe());
    if (poet.show !== undefined) {
        console.log(poet.show(poet));
    }
}
