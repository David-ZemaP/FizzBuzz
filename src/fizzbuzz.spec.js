import { ConvertFizzBuzz } from './fizzbuzz';

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
});
