import { ConvertFizzBuzz, generateFizzBuzzString } from './fizzbuzz';

describe('FizzBuzz example', () => {
  it('deberia retornar 1', () => {
    expect(ConvertFizzBuzz(1)).toEqual('1');
  });

  it('deberia retorna cualquier numero si no es multiplo de 3 o 5', () => {
    expect(ConvertFizzBuzz(7)).toEqual('7');
  });

  it('deberia retornar Fizz si es igual a 3', () => {
    expect(ConvertFizzBuzz(3)).toEqual('Fizz');
  });

  it('deberia retornar Fizz si es multiplo de 3', () => {
    expect(ConvertFizzBuzz(6)).toEqual('Fizz');
  });

  it('deberia retornar Buzz si es igual a 5', () => {
    expect(ConvertFizzBuzz(5)).toEqual('Buzz');
  });

  it('deberia retornar Buzz si es multiplo de 5', () => {
    expect(ConvertFizzBuzz(10)).toEqual('Buzz');
  });

  it('deberia retornar FizzBuzz si es multiplo de 3 y de 5', () => {
    expect(ConvertFizzBuzz(15)).toEqual('FizzBuzz');
  });

  it('deberia retornar una cadena de cualquier numero hasta ese numero', () => {
    expect(generateFizzBuzzString(5)).toEqual('1 2 3 4 5');
  });

  it('deberia retornar la cadena de numeros, segun la logica FizzBuzz', () => {
    expect(generateFizzBuzzString(5)).toEqual('1 2 Fizz 4 Buzz');
  });
});
