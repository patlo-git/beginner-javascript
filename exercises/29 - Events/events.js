// DOM elements emit events
// can attach event listeners to anything
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

// passing a function as an argument
// 1. GO GET SOMETHING
// 2. LISTEN FOR SOMETHING ('CLICK')
// 3. DO SOMETHING. this is a callback
// "hey browser, when someone clicks something, can you run the callback function?"

// we'll write this function to actually handle the click, before the listening
function handleClick() {
  console.log('It GOT CLICKED!!');
}

// technically this is an anon function, but bc we stored in a var
// this could be referenced for removeEventListener
const hooray = () => console.log('HOORAY');
// see notes: here handleClick does not get () after so that the browser runs it for us when clicked
// if handleClick had (), like handleClick(), it would run on page load
// handleClick is bound to butts and it's bound to coolButton
butts.addEventListener('click', function () {
  console.log('Im an anon');
});
coolButton.addEventListener('click', handleClick);
// having function outside of the eventListener has the benefit of drier code.
// if had multiple buttons. Multiple buttons, one functions.
// second benefit, for when removing it, you need a reference
// need the reference to unbind
// anon functions cannot be removed
// below doesn't work, bc butts is anon
// butts.removeEventListener('click', handleClick);
// this does work
// coolButton.removeEventListener('click', hooray);

// LISTEN ON MULTIPLE ITEMS
// select all buttons with a class of "buy"
// buyButtons variable does not have addEventListener method available for us to use.
// it does have forEach
// must use forEach to loop over the individual items
// note: will usually have variable selectors like this at the top of the page,
// but for sake of illustration it is here with the function
const buyButtons = document.querySelectorAll('button.buy');
/*

function handleBuyItem() {
  console.log('BUYING ITEM');
}

// function is looping over each button
// buyButton param could be named anything, ex oprah, peterPan, avatar, anythingWeWant
// it is just a reference for the browser
// browser runs attachListener when a button is clicked
// the browser knows it will pass you the first argument(buyButton)
// that is the element that got clicked
function attachListener(buyButton) {
  // this console.log runs ten times, just to see it's working
  // only runs handleBuyItem when actually clicked
  console.log('Binding the buy button');
  buyButton.addEventListener('click', handleBuyItem);
}

// buyButtons.forEach(attachListener);
// could also use an arrow function
// dont need the parenthesis on button b/c only once argument
buyButtons.forEach((button) => {
  // only downside to using an => here for the addEventListener is
  // you cannot unbind it bc that is an anon function in this case.
  button.addEventListener('click', () => {
    console.log('YOU CLICKED IT');
  });
});

// to remove them you'd also have to loop over them also
*/

// EVENT OBJECT
// access the event
// event could also be (e)
function handleBuyButtonClick(event) {
  console.log('You clicked a button!!');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick)
});

window.addEventListener('click', function (event) {
  console.log('YOU CLICKED THE WINDOW');
  console.log(event.target);
  console.log(event.type);
  // event.stopPropagation();
  console.log(event.bubbles);
},
  // capture down, bubble up
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function (e) {
  console.log(e.currentTarget);
  console.log(this);
});