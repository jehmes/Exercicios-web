function filtrarPorQuantidadeDeDigitos(array, numero) {
    let novo = []
    array.forEach(n => {
        if (String(n).length === numero) {
            novo.push(n)
        }
    })
    console.log(novo)
}


function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    let resultado = []   
    for (numero of numeros) {
        const quantidadeDeDigitos = String(numero).length
        if (quantidadeDeDigitos === quantidadeDesejada)
            resultado.push(numero)
    }
    return resultado
}



function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    return numeros.filter(numero => {
        const quantidadeDeDigitos = String(numero).length
        return quantidadeDeDigitos === quantidadeDesejada
    })
}


filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]