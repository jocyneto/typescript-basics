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

// Funcões
function dividir (a:number , b:number){
    return a/b;
}

const dividir2 = (a:number, b:number) => {
    return a/b;
}

// Generics:
function inserirNoInicio<T>(array: T[], valor: T){
    const novoArray = [valor, ...array];
    return novoArray;
}

const inserirNoInicio2 = <T>(array: T[], valor: T) =>{
    const novoArray = [valor, ...array];
    return novoArray;
}

const pilhaInt = inserirNoInicio([1,2,3], -1);           //retornara ~~> [-1,1,2,3]
const pilhaStr = inserirNoInicio2(['b','c','d'], 'a');   //retornara ~~> [a,b,c,d]

//Classes:

class Estudante{
    
    /* Metodo 01:
    public nome: string;
    public idade: number;
    private aulas: string[];

    constructor(nome: string, idade: number, aulas:string[]){
        this.nome = nome;
        this.idade = idade;
        this.aulas = aulas;
    }*/
    
    // Metodo 02:
    constructor(
        public nome: string, 
        public idade: number, 
        private aulas:string[]
    ){}

    adicionaAula(nomeAula: string){
        this.aulas.push(nomeAula);
    }

    getAulas(){
        return this.aulas.slice();
    }


}

const estudante = new Estudante('Jocy', 29, ['.net', 'angular', 'TCC'])

//Interfaces (Criando e usando)
class Funcionario {
    constructor(public name:string, public idade: number){}
}

class Dev extends Funcionario implements autenticavel{
    
    private user = 'adm';
    private pass = '123';
    
    autenticar(user: string, pass: string){
        if(this.user === user && this.pass === pass){
            return true;
        }
        return false;
    }

}

class Design extends Funcionario{

}

interface autenticavel {
    //autenticar(user: string, pass: string)
    autenticar: (user: string, pass: string) => void;
}

const dev = new Dev('Jocy', 29);
const designer = new Design('Fulano', 22);

dev.autenticar('adm', '123');

