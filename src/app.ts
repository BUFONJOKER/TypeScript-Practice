import { Invoice } from './classes/invoices.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTrmplate.js';

// let docOne:HasFormatter;
// let docTwo:HasFormatter;

// docOne = new Invoice('mani','work on the mani website',25000);
// docTwo = new Payment('rathore','work on the mani website',25000);

// let docs:HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

let client_1 = new Invoice('Mani', 'Work on the mani website', 25000);
let client_2 = new Invoice('Rathore', 'Work on the mani website', 25000);

// console.log(city_1.format());
// console.log(city_2.format());

let cities: Invoice[] = [];

client_1.amount = 200000;
// city_2.country = 'India';
cities.push(client_1);
cities.push(client_2);
// console.log(cities);

cities.forEach((index) => {
    // console.log(index.population,index.format(),index.country);
})

const anchor = document.querySelector('a')!;

// console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.getElementById('type') as HTMLSelectElement;
const tofrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
// const addButtonClick = () =>{
//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.value
//     );
// }

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber];

    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');

    let toFrom_1 = document.getElementById('tofrom') as HTMLInputElement;
    toFrom_1.value = '';
    let details_1 = document.getElementById('details') as HTMLInputElement;
    details_1.value = '';
    let amount_1 = document.getElementById('amount') as HTMLInputElement;
    amount_1.value = ''

})

//interfaces

interface person {
    name: string,
    age: number,
    speak(a: string): void,
    spend(a: number): number
}

let me: person = {
    name: 'mani',
    age: 23,
    speak(text: string): void {
        // console.log(text);
    },
    spend(amount: number): number {
        // console.log('I spent',amount);
        return amount;
    }
};

let greetPerson = (person: person) => {
    // console.log('Hello',person.name);
    // console.log('Age',person.age);
    person.speak('Hello');
    let expenses = person.spend(100);
    // console.log('Expenses',expenses);
};

greetPerson(me);

// generics
interface Resource<T>{
    uid:number;
    resourceName:string;
    data:T;
}

const add:Resource<string> = {
    uid:1,
    resourceName:'person',
    data:'mani'
}

// console.log(add);

// enums
enum ResourceType {BOOK,AUTHOR,FILM,DIRECTOR,PERSON}

interface Resource1{
    name:string;
    resourceType:ResourceType;
    data:string
}

let docOne:Resource1 = {
    name:'mani',
    resourceType:ResourceType.FILM,
    data:'hello'
};

// console.log(docOne);

// make a tuple
let tuple:[string,number,boolean] = ['mani',23,true];
// console.log(tuple);