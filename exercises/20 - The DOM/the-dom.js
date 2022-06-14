/*
const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');
console.log(heading.textContent);
console.log(heading.innerText);
// update content
// set the textContent property on that element
// heading.textContent = 'Wes is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);

// set of properties working with html
console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
// The textContent property of the Node interface represents the text content of the node and its descendants.

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// better way to attach text to the end of something
// 'beforeend' or 'beforebegin' or 'after begin' are set args for the method
pizzaList.insertAdjacentText('afterbegin', '🍕');
pizzaList.insertAdjacentText('beforeend', '🍕');
pizzaList.insertAdjacentText('beforebegin', '🍕');
*/

// CLASSES!
// when u select element there is a class list attribute on that and on that there are some methods for getting all the classes as well as removing
// this is setting a variable for anything with the class of "nice"
// in this case .nice is on an image
const pic = document.querySelector('.nice');
// various methods on the attribute
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

// quick little behavior function, on click, toggleRound function
function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup'; // setter
pic.width = 250;
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter not a setter

// // to wait for all page resourses to load before this will fire
// window.addEventListener('load', function () {
//   console.log(pic.naturalWidth); // getter
// });
// // can specify a specific element to load, like our pic variable
// pic.addEventListener('load', function () {
//   console.log(pic.naturalWidth); // getter
// });

// SET/GETATTRIBUTE METHODS
// Rarely used. These are more for custom attributes, unlike .notation like .alt, .width
// Be careful when setting CUSTOM ATTRIBUTES
pic.setAttribute('alt', 'REALLY CUTE PUP'); // SETTING THE ATTRIBUTE
console.log(pic.getAttribute('alt')); // GETTING THE ATTRIBUTE
// HAS ATTRIBUTE IS T/F

// If you DO want Custom Attributes, use DATA ATTRIBUTES
// DATA ATTRIBUTES
// If you want to attach some metadata or any kind of data to an element that doesn't have a standard name attribute
// use "data-(insert your made up custom data name here)"
const custom = document.querySelector('.custom');
// to access those custom data attributes, you call .dataset
// dataset is an object full of property values availale to you
console.log(custom.dataset);

custom.addEventListener('click', function () {
  alert(`Welcome ${custom.dataset.name}`);
});

// question, isn't that was classes are for? why not just use a custom class?
