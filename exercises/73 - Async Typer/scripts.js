function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// get a random number between ...
// pass in random number for consistency so you can test it. 
// could also pass that "random number" in as a third argument when running it.
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// loop over it

// async for of loop
// async function draw(el) {
//   // copy of the text of the element
//   const text = el.textContent;
//   // loop over every letter of the text
//   let soFar = '';
//   for (const letter of text) {
//     // soFar = soFar + letter
//     soFar += letter;
//     el.textContent = soFar;
//     // wait for some amount of time
//     // pull in the min max values
//     const { typeMin, typeMax } = el.dataset;
//     const amountofTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountofTimeToWait);
//   }
// }

// RECURSION
// a function calling itself until there's an exit condition
function draw(el) {
  // keep an index inside of here that'll be incremented once each time
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  // closure
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    // wait for some time
    const amountofTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountofTimeToWait);
    // exit condition
    if (index <= text.length) {
      drawLetter();
    }
  }
  // when this function draw() runs, kick off drawLetter
  drawLetter();
}

// GRAB ALL THE ELEMENTS
// turn this
// const els = document.querySelectorAll('[data-type]');

// els.forEach(el => draw(el));

// into this
document.querySelectorAll('[data-type]').forEach(draw);


