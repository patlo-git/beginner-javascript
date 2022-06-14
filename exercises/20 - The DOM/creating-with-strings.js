const item = document.querySelector('.item');

const width = 600;
const src = `https://picsum.photos/${width}`;
const desc = 'cute pup';
// currently the below is still only a string
// only becomes an element once we dump it into the DOM using innerHTML
// and then pull it out after the fact, using a variable or the like
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;
console.log(typeof myHTML);

// // setter
// // can dump it right in
// item.innerHTML = myHTML;
// console.log(typeof myHTML);

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');
// console.log(itemImage);

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
// still aren't on the page anywhere, but we have them as DOM elements
console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);

console.log(myFragment);
