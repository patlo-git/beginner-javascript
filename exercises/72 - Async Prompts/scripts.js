/* eslint-disable */
// make wait function to set await for pop up transition animation
function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// can only pass popup as an argument since it's scoped to the promise in function ask()
async function destroyPopup(popup) {
  // declaring a let var here so we can leave popup param prime iteslf alone. This will only change the var associated with it. Then we reassign it to null below.
  // could also disable eslint so it doesn't yell at you
  let myPopup = popup;
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely!
  popup.remove();
  // removing it from the dom, doesn't remove it from JS' memory entirely
  // we want to destroy it
  myPopup = null;
}
// make our prompt function
function ask(options) {
  // options will have two things
  // 1. what will the text of the prompt be
  // 2. can you cancel it with a cancel button
  return new Promise(async function (resolve) {
    // 1. First we need to create a pop up with all the fields in it
    // immediately returns to us a DOM node so we can add event listeners.
    // if we used backticks and a form, we couldn't add event listeners
    // until we added it to the page
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>
      `
    );

    // 2. check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      // if we don't give it a type of button it will assume it's a submit
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.append(skipButton);
      // TODO: listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        function () {
          // resolve with null b/c that's what prompt returns when you do nothing
          resolve(null);
          // after resolving we want to destroy the popup
          destroyPopup(popup);
        },
        { once: true })
    }
    // 3. listen for the submit event on the inputs
    popup.addEventListener('submit', function (e) {
      e.preventDefault();
      // e.target gives us the popup
      resolve(e.target.input.value);
      // remove the event listener for submitted
      // remove it from the DOM entirely
      destroyPopup(popup);
    },
      // can pass a third arg for addEventListener, an options object
      // basically, only submit once, then remove it.
      { once: true }
    );
    // 4. when someone does submit it, resolve the data that was in the input box

    // insert that popup into the DOM
    document.body.appendChild(popup);
    // put very small timeout before we add the 'open' class so we see the transition
    await wait(50);
    popup.classList.add('open');

  });
}

// select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  // const cancel = 'cancel' in button.dataset;
  // could also use
  const cancel = button.hasAttribute('data-cancel');

  // title will be whatever the user has typed into the data-question
  // we access that with button.dataset.question
  const answer = await ask({
    title: button.dataset.question,
    // cancel: cancel,
    // or
    cancel,
  });
  console.log(answer);

}

const buttons = document.querySelectorAll('[data-question]');
// loop over the buttons
buttons.forEach(button => button.addEventListener('click', askQuestion));

// how do we use this pop up to ask questions in series?
const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dog\'s name?' },
];

// promise.all will pop them all up at once
// but we want them to popup sequentially.
// If we use map, we get an array of our three promises, which haven't been answered yet

// can make a utility function called asyncMap, but return to us an array like a map does
async function asyncMap(array, callback) {
  // make an array to stoure our results
  const results = [];
  // loop over our array
  for (const item of array) {
    // same as asking await ask(question)
    // but we made it generic 
    // so we can pass in what the array and callback actually is
    // const result = await callback(item);
    // just pass in the above result var directly to results
    results.push(await callback(item));
  }
  // when we're done w the loop, return it!
  return results;
}

async function go() {
  // question is passed in to array param
  const answers = await asyncMap(questions, ask)
  console.log(answers);
}

go();
// How do we make an async .map?
// A for of loop
// this has been refactored above

// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// unlike map and forEach, for of allows you to pause a looop by awaiting something inside of it
// askMany();