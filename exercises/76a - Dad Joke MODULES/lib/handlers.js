// import NAMED export of fetchJoke
import { fetchJoke } from "./index.js";

import { loader, jokeHolder, jokeButtonSpan } from "./elements.js";

import { randomItemFromArray } from "./utils.js";
// import DEFAULT export
import buttonText from "../data/buttonText.js";

export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  // passing (arr, not). Whatever the button is currently, don't return that one, pick again..
  // when we update the text with the joke, need to be jokeButtonSpan
  jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);
}