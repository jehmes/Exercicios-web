/*for in intera sob indices e o for of é sob valores (map, set, array, strings, objetos)s*/
const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

console.log('                    ')

aprovados.forEach(nome => console.log(nome))

console.log('                    ')

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)