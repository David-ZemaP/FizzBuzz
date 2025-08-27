import { sumador, multiplicador } from './calculadora.js';

describe('Calculadora', () => {
  it('deberia sumar dos numeros', () => {
    expect(sumador(3, 2)).toEqual(5);
  });

  it('deberia multiplicar dos numeros', () => {
    expect(multiplicador(3, 2)).toEqual(6);
  });
});
