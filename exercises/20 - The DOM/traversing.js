/*
const wes = document.querySelector('.wes');

// node vs element
// element properties
console.log(wes.children);
console.log(wes.childElementCount);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

console.log(wes.childNodes);
// if wrapped in a tag it's an element
// if not, it's a node, too

// node elements
// read only
el.childNodes
el.firstChild
el.lastElementChild
el.previousSibling
el.nextSibling
el.parentNode
*/

//   REMOVE
// $0.remove();
// Gotcha: create element, add it to DOM, remove it from, but add it back
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
console.log(p);

p.remove();
console.log(p);
