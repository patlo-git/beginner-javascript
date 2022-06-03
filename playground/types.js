/* eslint-disable */
/*
// debugger;
// strings
const name = 'patrick';
const middle = "topher";
const last = `bos`;

const sentence = "she's so \"cool\"";
const sentence2 = 'she\'s so "cool"';

const song = `Oooh

ya

I like
pizza`;

// concatenation
const hello = "hello my name is " + name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + '. Nice to meet you';

// using back ticks (` `) in interpolation, using a variable in a string. Much cleaner.

// Note: why does it say name is deprecated when it's just a variable name?

const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old.`

const html = `
    <div>
        <h2>${name}</h2>
        <p>${hello}</p>
    <div>
`;

document.body.innerHTML = html;
console.log(html);

// numbers
const age = 100.5;
const name = 'patrick';

// const a = 10;
// const b = 20;

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kid gets ${eachKidGets}`);

// OBJECTS
const person = {
    // property: 'value'
    // kind of "sub variables"
    first: 'patrick',
    last: 'lorenz',
    age: 100
};

// Null and Undefined
// two ways to express nothing in JS

let dog;
console.log(dog);
dog = 'snickers';

let somethingUndefined;
const somethingNull = null;

const cher = {
    first: 'cher'
};

const teller = {
    first: 'Raymond',
    last: 'Teller'
}

teller.first = 'Teller';
teller.last = null;

*/

// BOOLEANS and EQUALITY
// flag variable - set to true or false
let isDrawing = false;

// can calculate booleans
let age = 18;
const ofAge = age > 19;
console.log(ofAge);

// Equality 
// = sets values
// === 
// == almost always a bad practice
age = 100;
let age2 = 100;
// age === age2 (returns true)