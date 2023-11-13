"use strict";
const anchor = document.querySelector('a');
console.log(anchor.href);
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
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
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
