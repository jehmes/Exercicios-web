function calculo(idade) {
    let valor = 100
    if (idade < 10) {
        return valor += 80
    }
    else if (idade > 10 && idade < 30) {
        return valor += 50
    }
    else if (idade > 30 && idade < 60) {
        return valor += 95

    }
}

console.log(calculo(5))