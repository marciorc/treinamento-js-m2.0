function comunicacaoDosAnimais(nomeDoAnimal) {
    if (nomeDoAnimal === 'cachorro') {
        return 'woff woff'
    } else if (nomeDoAnimal === 'gato') {
        return 'miau'
    } else {
        return 'inválido'
    }
}

module.exports = {
    comunicacaoDosAnimais
}