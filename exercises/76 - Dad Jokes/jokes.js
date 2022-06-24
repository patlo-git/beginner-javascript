const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
  'cringe',
];

async function fetchJoke() {
  // turn loader on
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  // when the data comes back
  // turn the loader off
  loader.classList.add('hidden');
  jokeButton.classList.remove('hidden');
  return data;
  // could also do this
  // return response.json();
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  // recursion
  // if the buttonText is the same as the one before (don't repeat), return another random item
  if (item === not) {
    console.log('Not again');
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  // passing (arr, not). Whatever the button is currently, don't return that one, pick again..
  // when we update the text with the joke, need to be jokeButtonSpan
  jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);
}

jokeButton.addEventListener('click', handleClick);
