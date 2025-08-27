import { ConvertFizzBuzz } from './fizzbuzz';

describe('FizzBuzz example', () => {
  it('deberia retornar 1', () => {
    expect(ConvertFizzBuzz(1)).toEqual('1');
  });

  it('deberia retorna cualquier numero si no es multiplo de 3 o 5', () => {
    expect(ConvertFizzBuzz(7)).toEqual('7');
  });
});
