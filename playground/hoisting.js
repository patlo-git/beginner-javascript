// HOISTING
var age;
console.log(age);
age = 10;

// below, incl comments, is how some people like use hoisting
/* What does this file do? */
// sayHi();

/* How does this file do it? */
// function sayHi() {
//   console.log('hey!');
//   console.log(add(10, 2));
// }

function add(a, b) {
  return a + b;
}
