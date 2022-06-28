/* eslint-disable */

function sayHi() {
  console.log('Hi1');
}

sayHi();

// IIFE
// (function sayHi() {
//   console.log('Hi2');
// })();

// could also
(function (name) {
  console.log(`Hi ${name}!`);
})('Patrick');