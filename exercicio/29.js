let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 22, 5, 15, 17, 20, 19]

function verificarIntervalo (vetor) {
    let dentro = 0
    let fora = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro ++
        }
        else 
        fora ++
    }
    console.log(`${dentro} número(s) estão dentro do intervalo de 10 e 20.  ${fora} número(s) estão fora do intervalo` )
}


(verificarIntervalo(vetor))

