// all library js
// NAMED export - can have lots of these
export async function fetchJoke(loader) {
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
  return data;
  // could also do this
  // return response.json();
};
