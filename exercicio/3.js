function calculo(base, expoente) {
    //metodo antigo
    let resultado = Math.pow(base, expoente)

    //novo metodo
    resultado = base ** expoente
    return resultado
}

console.log(calculo(3, 2))