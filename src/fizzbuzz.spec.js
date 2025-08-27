import { ConvertFizzBuzz } from './fizzbuzz';

describe('FizzBuzz example', () => {
  it('deberia retornar el mismo numero si no es multiplo de 3 o 5', () => {
    expect(ConvertFizzBuzz(1)).toEqual('1');
  });
});
