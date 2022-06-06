// // SCOPE
// // when you create a var out in the open it is a GLOBAL VARIABLE
// const first = 'wes';
// let second = 'bos';
// // var variables are attached to the WINDOW object, but globally scoped.
// var age = 100;

// // NOTE: SHOULD NOT BE MAKING GLOBAL VARIABLES! "RECIPE FOR A HEADACHE"

// function sayHi() {
//   console.log('Say hi');
// }
// // Anything in the global scope is attached to the window object w/ exception of const and let variables
// // but functions, when declared globally, are available inside of the window

// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   // something must be returned
//   console.log(myAge);
//   console.log(hair);
// }
// go();

// BLOCK SCOPING {}
// function isCool(name) {
//   // let cool;
//   if (name === 'wes') {
//     // var variables are not block scoped but function scoped
//     // so they leak out the block, but stay in function
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// // if were to use var vs let here the var i would "leak" out of the block'
// // var variables are not block scoped but function scoped
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// SCOPE LOOKUP
const dog = 'snickers';

function logDog(dog) {
  // behind the scenes JS is making function scoped variables
  // const dog = whateverYouPassedInAsTheFirstArgToTheFunction;
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog('Rufus');
}

go();

// Function scoping - functions are scoped the exact same as variables
function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
