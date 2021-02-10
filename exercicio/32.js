let vetor = [5, 5, 8]

function calcular (vetor) {
    let resultado = 0
    for (let i = 0; i < vetor.length; i++) {
        resultado += vetor[i] 
    }
    return resultado = resultado / vetor.length
    
}

console.log(calcular(vetor))