import first, // default
// can also rename exports
{ returnHi as sayHi, last, middle } from './utils.js'; // named

// DEFAULT export
// import name can be anything we want
// import anythingWeWant from './wes.js'

// importing everything
import * as everything from './utils.js';
// console.log(everything);

// console.log(anythingWeWant);
// default
// console.log(first);

// const name = 'patrick';

// console.log(sayHi(name));
// console.log(last);
// console.log(middle);

import { handleButtonClick } from './handlers.js';

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);