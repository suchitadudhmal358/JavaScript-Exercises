import { fetchJoke } from "./fetchJoke.js";
import { randomItemFromArray } from "./randomText.js";
import { jokeButton, jokeHolder } from "./elements.js";
import buttonText from "../data/buttonText.js";

export async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}
