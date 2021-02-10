//acredito q qnd ele chama prototype de array é pra pegar as funções de array, tipo o indice
Array.prototype.forEach2 = function (callback) { // essa função é para mostrar como a funcion forEach é por dentro
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)  //o this é o array, entao this[i] é o indice, o 'i' é o elemento do array, e o this é o proprio array
    }
}

const aprovados = ['agatha', 'pedro', 'miguel', 'fernando']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

