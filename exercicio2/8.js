function multiplicar(n1, n2) {
    let resultado = 0
    for (let i = 0; i < n2; i++) {
        resultado += n1        
    }
    return resultado
}

console.log(multiplicar(1, 8))