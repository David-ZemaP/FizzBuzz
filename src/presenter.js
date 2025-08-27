import { generateFizzBuzzString } from './fizzbuzz.js';

const n = document.querySelector('#numero');
const div = document.querySelector('#resultado-div');
const form = document.querySelector('#fizzbuzz-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const number = Number.parseInt(n.value);

  div.innerHTML = `<p> ${generateFizzBuzzString(number)} </p>`;
});
