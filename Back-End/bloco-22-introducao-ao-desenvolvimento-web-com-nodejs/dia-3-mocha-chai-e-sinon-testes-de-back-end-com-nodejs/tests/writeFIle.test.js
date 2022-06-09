const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-as-promised')) 

const fs = require('fs').promises;

const sinon = require('sinon');

const { writeFile } = require('../index');

describe('Quando chamada a funcao writeFile', () => {
  describe('quando a funcao for concluída com sucesso', () => {
    describe('o retorno é ', () => {

      before(() => {
        sinon.stub(fs, 'writeFile').returns("ok");
      });
      
      after(()=> {
        fs.writeFile.restore();
      });

      it('ok!', async () => {
        const result = await writeFile('arq.txt', "Novo texto!");
        
        expect(result).to.be.equal('ok!');

      });

      it('é uma string', async () => {
        const result = await writeFile('arq.txt', "Novo texto!");
        
        expect(result).to.be.a('string');
      });

    });
  });

  describe('Quando a função nao for concluida com sucesso', () => {

    it('o retorno é null', async () => {
      //const result = await writeFile('arq.txt', "teste!");

        await expect(writeFile('lalala.txt', "teste!")).to.be.rejectedWith(Error)
    });
  });
});