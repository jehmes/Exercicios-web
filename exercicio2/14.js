function objetoParaArray(object) {
    console.log(Object.entries(object))
    console.log(object)
}

/*function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
        resultado.push([chave, objeto[chave]])
    return resultado
}


function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}


function objetoParaArray(objeto) {
    return Object.entries(objeto)
}*/


objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
    codigo: 11111,
    preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]
