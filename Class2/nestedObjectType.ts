type Person = {
    name: string,
    age: number
}

type Book = {
    author: Person,
    title: string,
    ISBN: string,
    noOfPages:number;
    genre:"Technical"|"Fiction"|'Poem'
}

let learningTypescript:Book = {
    author: {
        name: "Jorge Goldberg",
        age: 20
    },
    title: 'Learning Typescript',
    ISBN: '2342aAA',
    noOfPages: 30,
    genre:"Technical"
}

console.log(learningTypescript);
