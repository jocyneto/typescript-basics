//  Tipos primitivos:
//      Não é preciso colocar :string, por exemplo, pois é redundancia de código. 
//      O typescript identifica automaticamente o tipo da variável quando criado e declarado a seguir.
let nome: string = 'Jocy';

let idade: number = 29;

let professor: boolean = false;

// Criando objetos:
//~~> Com essa estrutura, permite criar somente objetos com exatamente essa estrutura de nome e idade
//Metodo 01: (Não muito utilizado)
let people: {
    name: string;
    age: number;
}

people = {
    name: 'Jocy',
    age: 29
}

//Metodo 02: 
type Person = {name: string; age: number;}

let otherPeople: Person;

otherPeople = {name: 'Max', age: 49};


/* Não irá permitir a criação.
people = {
    professor: false
}
*/

// Criando Arrays:
//      Primitivos:
let sports: string[];
sports = ['football', 'basketball', 'american football']

//      Objetos:
//          Metodo 01: (Não muito utilizado)
let persons: {name: string, age:number}[];
persons = [ {name: 'Jocy', age: 29}, {name: 'Max', age: 49}]

//          Metodo 02:
let listPersons: Person[];
listPersons = [ {name: 'Jocy', age: 29}, {name: 'Max', age: 49}]