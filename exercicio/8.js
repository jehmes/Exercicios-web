let stringPontos = "30, 99, 20, 4, 51, 25, 42, 38, 56, 5"

function pontuacao (stringPontos) {
    let pontos = stringPontos.split(", ")
    let maiorPonto = pontos[0]
    let menorPonto = pontos[0]
    let recordMaior = 0
    let piorJogo = 1

    for (let i = 0; i < pontos.length; i++) {
        if (pontos[i] > maiorPonto) {
            maiorPonto = pontos[i]
            recordMaior ++
        }
        else if (pontos[i] < menorPonto) {
            menorPonto = pontos[i]
            piorJogo = i+1
        }
        console.log(menorPonto, piorJogo, pontos[i])
    }

    return [recordMaior, piorJogo]
    

}

console.log(pontuacao(stringPontos))