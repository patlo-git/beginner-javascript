// FUNCTIONS!!
// defined and called
// defining the function
// passing in Parameters or Params
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // This is the function block or function body.
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  // temporary variable. Only available in function.
  // when function is done running the temp var is "garbage collected"
  return Math.ceil(total);
}

// FUNCTION CALL, or a "running" of the function
// to Capture the returned value of the function (total)
// passing in Arguments for the expected Parameters

// const patTotal = 500;
// const patTaxRate = 0.3;
// const myTotal = calculateBill(patTotal, patTaxRate);

// Function Definition
// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// const greeting = sayHiTo('Patrick');
// console.log(greeting);

// when you run a function in JS it takes in whatever you've passed it, either directly as a number or a string, or via reference like a variable (which also holds a value), we're still passing values. JS doesn't care.

// when values get passed into a function they sort of get renamed into whatever it is you've defined your parameter functions as.

// as long as we pass in an argument (eg Patrick) it's going to have a variable inside of the function that is referenced to whatever the person has passed in. if we don't pass anything in, the variable will be set to undefined

// PASSING FUNCTIONS AS ARGUMENTS
// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// DEFAULT VALUES
// function yell(name = '') {
//   return `HEY ${name.toUpperCase()}!`;
// }
// yell(doctorize('patrick'));

const myTotal4 = calculateBill(100, undefined, 0.2);
// console.log(myTotal4);

console.log(`Your total is $${myTotal4}`);

// another option for above
// instead of sticking it in another variable like myTotal,
// since it returns a value,
// you can use INTERPOLATION strings with ` ` to run the function right inside of it.
// console.log(`Your interpolated total is $${calculateBill(myTotal4)}`);
