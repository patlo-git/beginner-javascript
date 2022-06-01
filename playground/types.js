/* eslint-disable */
debugger;
// strings
const name = 'patrick';
// const middle = "topher";
// const last = `bos`;

// const sentence = "she's so \"cool\"";
// const sentence2 = 'she\'s so "cool"';

// const song = `Oooh

// ya

// I like
// pizza`;

// // concatenation
// const hello = "hello my name is " + name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + '. Nice to meet you';

// using back ticks in interpolation, using a variable in a string. Much cleaner. Note: why does it say name is deprecated when it's just a variable name?
const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old.`

const html = `
    <div>
        <h2>${name}</h2>
        <p>${hello}</p>
    <div>
`;

document.body.innerHTML = html;
console.log(html);
