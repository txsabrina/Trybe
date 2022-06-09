const { expect } = require('chai');

const { descoveringNumber} = require('../index');

describe('Chamada a funçao descoveringNumber', () => {
  describe('quando passado um numero', () => {
    it('maior do que 0, o resultado será "positivo"', () => {
      const resultado = descoveringNumber(2);

      expect(resultado).to.be.equal('positivo');
    
    });

    it('menor do que 0, o resultado será "negativo"', () => {
      const resultado = descoveringNumber(-2);

      expect(resultado).to.be.equals('negativo');

    });

    it('igual a 0, o resultado será "neutro"', () => {
      const resultado = descoveringNumber(0);

      expect(resultado).to.be.equals('neutro');
    });
  });
  describe('quando nao for um numero', () => {
    it('retorna um erro', () => {
      expect(() => descoveringNumber('test')).to.throw;
    })
    
    it('retorna um erro com a mensagem "o valor deve ser um número"', () => {
      expect(() => descoveringNumber('test')).to.throw('o valor deve ser um número');
    });
  })
});

