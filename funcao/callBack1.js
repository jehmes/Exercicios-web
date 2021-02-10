const fabricantes = ['mercedes', 'audio', 'bmw']

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante) {
    return console.log(fabricante)
} )

fabricantes.forEach((fabricante) => {return console.log(fabricante)})

fabricantes.forEach(fabricante => console.log(fabricante))