
const { expect } = require('chai');
const { comunicacaoDosAnimais } = require('../src/comunicacao.js')

// const comoOCachorroSeComunica = comunicacaoDosAnimais('cachorro')
// console.log(comoOCachorroSeComunica)

// const comoOGatoSeComunica = comunicacaoDosAnimais('gato')
// console.log(comoOGatoSeComunica)

// const comoOPapagaioSeComunica = comunicacaoDosAnimais('papagaio')
// console.log(comoOPapagaioSeComunica)

// função anomina - não tem nome e nem parametro. Permite a execução de mais comandos dentro da função
describe('Comunicacao', function() {
    it('Validar que Cachorro se Comunica com au au', function() {
        expect(comunicacaoDosAnimais('cachorro')).to.eq('au au')
    })

    it('Validar que Gato se Comunica com miau', function() {
        expect(comunicacaoDosAnimais('gato')).to.eq('miau')
    })

    it('Validar que Papagaio retorna invalido', function() {
        expect(comunicacaoDosAnimais('papagaio')).to.eq('invalido')
    })
})