function menorNumero(array) {
    let menor = array[0]
    array.map(indice => {
        if (indice < menor) {
            menor = indice
        }
    })
    console.log(menor)
}


function menorNumero(numeros) {
    return Math.min(...numeros);
}


function menorNumero(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

function menorNumero(numeros) {
    let menor = numeros[0]
    for (let i in numeros)
        if (numeros[i] < menor)
            menor = numeros[i]
    return menor
}



menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15