let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 22, 5]

function lerVetor (vetor) {
    let par = 0
    let impar = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            par++
        }
        else impar++
    }

    console.log(`Par: ${par}. Impar: ${impar}`)
}

lerVetor(vetor)