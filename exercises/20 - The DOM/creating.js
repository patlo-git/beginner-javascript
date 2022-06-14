/*

// CREATE HTML ELEMENTS
// Document.createElement(tagName[, options]);
// p.s. the square brackets, when looking at syntax, means optional
// so this means optional options

// Let's make an element.
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// stil need to put it in the page, or inject it into the DOM
// APPEND CHILD API
// element.appendChild(aChild);
// aChild - The node to append to the given parent node (commonly an element).
// Grab an element to append against it
// adds a node to the end of the list of children of a specified parent node.

// Element.append() method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
// this document.body should be done last, once you've put the previous two elements in the myDiv
document.body.appendChild(myDiv);

// ParentNode.append, or element.append
// Look it up on MDN

// insertAdjacentElement
// "OH SHOOT! We need to add somthing to the top, like a heading!"
// method of the Element interface inserts a given element node
// at a given position relative to the element it is invoked upon.
// insertAdjacentElement(position, element)
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);
*/

/*
// DOM Exercise
// create an unordered list (UL) with Five (5) items in it
// using the Apis we just learned about

// creates wrapper DIV. * WB did not create a wrapper DIV
// need to put this after body div
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// creates UL * same as WB
const myUnorderedList = document.createElement('ul');
myUnorderedList.textContent = 'This is the sweet unordered list UL';
myUnorderedList.classList.add('my-UL');

// append the UL into the DIV
myDiv.append(myUnorderedList);

// creates first li (which should actually be second)
const myListElement = document.createElement('li');
myListElement.textContent = 'This is an li I have created';
myListElement.classList.add('my-LI');

// folds LI into UL * same as WB
myUnorderedList.appendChild(myListElement);

// creates an adjacent li * WB used ul.append
const firstLi = document.createElement('li');
firstLi.textContent = 'inserting adjacent element li';

// * WB injected it straight into the body, like I did with the div
myUnorderedList.insertAdjacentElement('beforeend', firstLi);

// creates remaining list items li * 3
const remainingLi3 = document.createElement('li');
remainingLi3.textContent = 'inserting element append lis';
const remainingLi4 = document.createElement('li');
remainingLi4.textContent = 'inserting element append lis';
const remainingLi5 = document.createElement('li');
remainingLi5.textContent = 'inserting element append lis';

// append
myUnorderedList.append(remainingLi3, remainingLi4, remainingLi5);

// this document.body should be done last, once you've put the previous two elements in the myDiv
document.body.appendChild(myDiv);
*/

/*
// How Wes Bos did it
// cloneNode
// method of the Node interface returns a duplicate of the node on which this method was called.
// Its parameter controls if the subtree contained in a node is also cloned or not.
// nodetobecloned.cloneNode(deep); // deep is optional param - if want to clone children of node. replace deep with true or false.

// <ul>
// <li>One</li>
// <li>two</li>
// <li>three</li>
// <li>four</li>
// <li>five</li>
// </ul>

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);
*/
