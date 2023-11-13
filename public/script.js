"use strict";
const inputs = document.querySelectorAll('input');
// console.log(inputs);
inputs.forEach(input => {
    //     console.log(input);
});
// console.log("Hello World");
let string = 'mani';
let number = 8;
let boolean = true;
boolean = false;
number = 10;
string = '5';
// console.log(string, number, boolean);
const circle = (diameter) => {
    return diameter * Math.PI;
};
// console.log(circle(10));
let array = [1, 2, 3, 4];
array.push(5);
// array.push("mani");
let names = ['mani', 'kumar', 'reddy'];
names.push('qba');
// names.push(5);
let mixed = ['mani', 4, 'kumar', 5, true];
mixed[0] = 5;
mixed.push('rathore');
mixed.push(10);
mixed.push(false);
let object = {
    name: 'mani',
    age: 25,
    class: "BSCS"
};
// object.name = 1;
object = {
    name: 'kumar',
    age: 25,
    class: "BSCS",
};
let city;
city = 'chishtian';
let zip;
zip = 12345;
let isTrue;
isTrue = '1' === '1';
// console.log(isTrue);
let list = [];
list.push('abcdef');
// console.log(list);
let dictionary = [];
dictionary.push('abc');
dictionary.push(1);
let uid;
uid = 123;
uid = '123';
let mixedObject;
mixedObject = {
    name: "arj",
    age: 23,
    isTrue: true,
};
// console.log(mixedObject)
let x = 10;
// console.log(typeof x);
x = 10;
// console.log(typeof x);
x = 'mani';
// console.log(typeof x);
x = true;
// console.log(typeof x);
x = {};
// console.log(typeof x);
x = [];
// console.log(typeof x);
let y = [];
y.push(1);
y.push('mani');
y.push(true);
// console.log(y);
let country;
let rathore = 'rathore';
// console.log(rathore);
let abad = 'abad';
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
// add(5, 10);
let minus = (a, b) => number;
minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
let greet = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
let user = {
    name: 'mani',
    age: 23
};
// greet(user);
let calculate = (a, b, c) => number;
calculate = (numbOne, numberTwo, action) => {
    if (action === 'add') {
        return numbOne + numberTwo;
    }
    else {
        return numbOne - numberTwo;
    }
};
// console.log(calculate(10, 5, 'add'));
