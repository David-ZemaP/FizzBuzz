import sumar from './sumador';
import multiplicar from './multiplicador';

const first = document.querySelector('#primer-numero');
const second = document.querySelector('#segundo-numero');
const form = document.querySelector('#sumar-form');
const div = document.querySelector('#resultado-div');
const mult = document.querySelector('#mult-button');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = '<p>' + sumar(firstNumber, secondNumber) + '</p>';
});

mult.addEventListener('click', (event)=>{
  event.preventDefault();

  const firstn = Number.parseInt(first.value);
  const secondn = Number.parseInt(second.value);

  div.innerHTML = '<p>' + multiplicar(firstn, secondn) + '</p>';
});
