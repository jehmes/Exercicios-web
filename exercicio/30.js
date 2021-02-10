let vetor = [55, 9, 3, 4, 5, 6, 7, 8, 9, 2, 25, 22, 5, 98, 17, 20, 19]

function verificar (vetor) {
    let maior = 0
    let menor = 99999
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }

    console.log(`Maior: ${maior}. Menor ${menor}`)
}

verificar(vetor)

