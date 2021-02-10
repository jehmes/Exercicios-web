let vetor = [1, 2, 3, 4, 5, -6, 7, 8, 9, 10, 25, -22, 5, 15, 17, -20, -19]

function contar(vetor) {
    let qtd = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtd ++
        }
    }
    return qtd
}

console.log(contar(vetor))


 