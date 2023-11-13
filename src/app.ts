const anchor = document.querySelector('a')!;

console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.getElementById('type') as HTMLSelectElement;
const tofrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

// const addButtonClick = () =>{
//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.value
//     );
// }

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
    
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
   
})