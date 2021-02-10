function pagar(n, valor) {
    let resultado = valor
    resultado += (n * .05) * valor
    return resultado
}

console.log(pagar(10, 100))



function pagar1(n, valor) {
    
    resultado =   valor * (((1 + (.05))**(n-1)))
    return resultado.toFixed(2)
}

console.log(pagar1(10, 100))