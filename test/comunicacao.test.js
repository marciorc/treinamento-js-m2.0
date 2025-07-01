
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
    it('Validar que Cachorro se Comunica com woff woff', function() {
        //Arrange
        const animal = 'cachorro'
        //Act
        const comunicacao = comunicacaoDosAnimais(animal)
        //Assert
        expect(comunicacao).to.eq('woff woff')
    })

    it('Validar que Gato se Comunica com miau', function() {
        //Arrange
        const animal = 'gato'
        //Act
        const comunicacao = comunicacaoDosAnimais(animal)
        //Assert
        expect(comunicacao).to.eq('miau')
    })

    it('Validar que Papagaio retorna invalido', function() {
        //Arrange
        const animal = 'papagaio'
        //Act
        const comunicacao = comunicacaoDosAnimais(animal)
        //Assert
        expect(comunicacao).to.eq('inválido')
    })
})