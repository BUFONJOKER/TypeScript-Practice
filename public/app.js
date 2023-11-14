import { Invoice } from './classes/invoices.js';
import { Payment } from './classes/payment.js';
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
let cities = [];
client_1.amount = 200000;
// city_2.country = 'India';
cities.push(client_1);
cities.push(client_2);
// console.log(cities);
cities.forEach((index) => {
    // console.log(index.population,index.format(),index.country);
});
const anchor = document.querySelector('a');
// console.log(anchor.href);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// const addButtonClick = () =>{
//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.value
//     );
// }
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    let toFrom_1 = document.getElementById('tofrom');
    toFrom_1.value = '';
    let details_1 = document.getElementById('details');
    details_1.value = '';
    let amount_1 = document.getElementById('amount');
    amount_1.value = '';
});
let me = {
    name: 'mani',
    age: 23,
    speak(text) {
        // console.log(text);
    },
    spend(amount) {
        // console.log('I spent',amount);
        return amount;
    }
};
let greetPerson = (person) => {
    // console.log('Hello',person.name);
    // console.log('Age',person.age);
    person.speak('Hello');
    let expenses = person.spend(100);
    // console.log('Expenses',expenses);
};
greetPerson(me);
const add = {
    uid: 1,
    resourceName: 'person',
    data: 'mani'
};
// console.log(add);
// enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
let docOne = {
    name: 'mani',
    resourceType: ResourceType.FILM,
    data: 'hello'
};
// console.log(docOne);
// make a tuple
let tuple = ['mani', 23, true];
// console.log(tuple);
