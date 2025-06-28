function comunicacaoDosAnimais(nomeDoAnimal) {
    if (nomeDoAnimal === 'cachorro') {
        return 'au au'
    } else if (nomeDoAnimal === 'gato') {
        return 'miau'
    } else {
        return 'inválido'
    }
}

module.exports = {
    comunicacaoDosAnimais
}