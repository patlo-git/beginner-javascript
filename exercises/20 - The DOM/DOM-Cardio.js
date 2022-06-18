// Make a div
const myDiv = document.createElement('div');
console.log(myDiv);

// add a class of wrapper to it
myDiv.classList.add('wrapper');
console.log(myDiv);

// put it into the body
// he used document.body.appendChild(myDiv);
document.body.insertAdjacentElement("afterbegin", myDiv);

// make an unordered list
// he used backticks on the ul and the thre lis (cheater!)
const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
myList.append(li1);

const li2 = li1.cloneNode(true);
li2.textContent = 'two';
myList.insertAdjacentElement('beforeend', li2);

const li3 = li1.cloneNode(true);
li3.textContent = 'three';
myList.insertAdjacentElement('beforeend', li3);

// put that list into the above wrapper
// he used myDiv.innerHTML = myList;
// "since there's nothing in this one it's easy to say .innerHTML"
myDiv.appendChild(myList);

// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src = 'https://picsum.photos/500';
// set the width to 250
// he used myImg.width = '250';
myImg.style.width = '250px';
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
// he was going to use insertAdjacent, but used appendChild bc "it's just going to go to the bottom of it."
myDiv.append(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHtmlString = `
  <div>
    <p></p>
    <p></p>
  </div>
  `;

// b/c he used innerHTML on the ul he made a const ulElement = div.querySelector('ul');
// presumably to insert it into the DOM
const myFragment = document.createRange().createContextualFragment(myHtmlString);

// put this div before the unordered list from above
// HE USED myList.insertAdjacentHTML('beforebegin', myHTML)
// presumably b/c it's not an actual HTML element, but this would turn it into such
// *** making a variable so I can grab the class name later
const myWrapper = document.querySelector('.wrapper');
myWrapper.prepend(myFragment);

// add a class to the second paragraph called warning
// ***** THIS ALMOST KILLED ME *********************
// his solution
// "put a class on it and select it"
// re: the inner div, which is the same that I did, but he added it directly to the html string.
// and then he just did a querySelector, like i did, on the div
// const myDiv = div.querySelector('.myDiv');
// to give the second p a classname, he used the variable innerDiv.children[1].classlist.add('warning'), which is what I was trying to do

// *give innerDiv a class name so I can grab it*
const innerDiv = myWrapper.querySelector('div');
innerDiv.classList.add('inner-div');

// const secondP = innerDiv.lastElementChild.querySelector('p');

// "not great, b/c if you change the order of the elements it breaks"
myWrapper.firstElementChild.lastElementChild.classList.add('warning', 'second-p');
// console.log(secondP);
// remove the first paragraph
myWrapper.firstElementChild.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// *** got stuck here
function generatePlayerCard(name, age, height) {
  // so far so good
  // could do a straight return of the html, but let's use a variable
  const html = `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height}' tall and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete
    </button>
  </div>
  `;
  return html;
}

// generatePlayerCard();

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
// his solution
const cards = document.createElement('div');
cards.classList.add('cards');

// const newDiv = `
//   <div class="cards">
//   </div>
//   `;

// make 4 player cards using generatePlayerCard
// his solution "there are a couple of ways we could do this"
// could also create four separate variables for these
// take an array of names and loop over them - his preferred
// could take the cards div cards.insertAdjacentHTML('afterbegin', call the function while passing the generated output), and run that four times over
let cardsHTML = generatePlayerCard('patrick', 43, 6);
cardsHTML += generatePlayerCard('hannah', 36, 5.6);
cardsHTML += generatePlayerCard('arnie', 43, 4);
cardsHTML += generatePlayerCard('moose', 43, 3);
console.log(cardsHTML);

// append those cards to the div
// cards is the div we created with a class of cards
cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
myWrapper.insertAdjacentElement("beforebegin", cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all buttons
const buttons = document.querySelectorAll('.delete');
// make our delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // find the parent div and remove
  // OPTION 1
  // buttonThatGotClicked.parentElement.remove();

  // OPTION 2
  // closest will look at an element,
  // and go up the tree of DOM elements and search until it finds the one specified.
  // in this case, the div of '.playerCard'
  // helpful if elements get rearranged
  // how does it know which one to start with in this case?
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
// select buttons. for each button
buttons.forEach((button) => button.addEventListener('click', deleteCard));

// select all the buttons!
// make out delete function
// loop over them and attach a listener