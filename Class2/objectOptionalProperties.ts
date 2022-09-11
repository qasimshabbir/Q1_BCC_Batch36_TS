type Human = {
    name: string,
    age?: number,
    noOfbooks: string|undefined
}

type ABook = {
    author: Human,
    title: string,
    ISBN: string,
    noOfPages:number;
    genre:"Technical"|"Fiction"|'Poem'
}

let learningJavascript:ABook = {
    author: {
        name: "Jorge Goldberg",
        noOfbooks: "20"
        
    },
    title: 'Learning Typescript',
    ISBN: '2342aAA',
    noOfPages: 30,
    genre:"Technical"
}

let learningHTML:ABook = {
    author: {
        name: "Jorge Goldberg1",
        age: 20,
        noOfbooks: "20"
    },
    title: 'Learning Typescript',
    ISBN: '2342aAA',
    noOfPages: 30,
    genre:"Technical"
}

console.log(learningJavascript);
