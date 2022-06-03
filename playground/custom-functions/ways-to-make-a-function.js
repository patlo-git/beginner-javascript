// FUNCTION DECLARATION
// function doctorize(firstName) {
//   return `Dr. ${firstName}`
// }

// ANONYMOUS function - no function name
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// FUNCTION EXPRESSION - store or define a function as a value in a variable
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// }

// ARROW FUNCTIONS
// turn regular function into =>. must use in variable
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// EVEN MORE CONCISE
// function inchToCM(inches) {
//   return inches * 2.54;
// }

// CONVERT TO ANONYMOUS FUNCTION 
// const inchToCM = function(inches) {
//   return inches * 2.54;
// }

// CONVERT TO ARROW FUNCTION
// delete "function" and use fat arrow =>
// const inchToCM = (inches) => inches * 2.54;
// if you ever have only one parameter for function, you can get rid of parenthesis
// const inchToCM = inches => inches * 2.54;

// convert this to arrow function
// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }
const add = (a, b = 3) => a + b;

// RETURNING AN OBJECT, we start with this (which may actually be easier to read than the => funct):
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// A WORKING ARROW FUNCTION, TOTALLY AN OPTION
// const makeABaby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked (or run) Function Expression
// parenthesis always run first in JS. will return a function value.
// Can immediately run it by putting () at the end
// The benefit of IIFE: closure. IIFE was popular before modules and block scope
// A function declares its own scope.
// (function (age) {
//   return `You are cool and ${age}`;
// })(10);

// METHODS!!
// a function that lives inside of an object
// in console.log, .log is the function to the console object
// create a property on your object, and set it to a function
const patrick = {
  name: 'Patrick Lorenz',
  // sayHi is a Method
  sayHi: function () {
    console.log('Hey Patrick');
    return 'Hey Patrick';
  },
  // Short Hand Method
  yellHi() {
    console.log('Hey Patrick!!');
  },
  // Arrow function
  // this is one that takes no arguments. short hand is most common.
  // You'd use an arrow function when you don't want to access "this." keyword
  // arrow functions take the parent scope of "this."
  whisperHi: () => {
    console.log('hii patriiick im a mouse');
  },
};

// Callback Functions
// a regular function where something happens when something is done.
// when someone clicks something runs something
// or when a certain amount of time passes do something
// a function that gets passed in to another function and then it's calledback by the browser later

// Click Callback
const button = document.querySelector('.click-me');
// we're not running the function(), just calling it when someone clicks
// button.addEventListener('click', patrick.yellHi);

// Callback functions can be declared outside of the handler. Common practice
function handleClick() {
  console.log('Great Clicking!!');
}

// Where you define the function outside and then pass in a reference to it (handleClick)
// button.addEventListener('click', handleClick);

// the other way to do it is to pass in an anonymous function here
// passed it an anoynymous function as a value directly
button.addEventListener('click', function () {
  console.log('nice job!');
});

// Timer Callback
// takes two things, a function to call or run, and a duration - after how long
// setTimeout(patrick.yellHi, 1000);

// ex. using an anonymous function
// setTimeout(function () {
//   console.log('Done! Time to eat!')
// }, 1000);

// ex. using an arrow function
setTimeout(() => {
  console.log('Done! Time to eat!')
}, 1000);
