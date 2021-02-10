function nota (nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida < 40) {
        console.log('Reprovado')
    }
    else  {
        console.log('Aprovado')
    }
}


function arredondar (nota) {
    if (nota % 5 > 2 && nota > 38) {
        return nota + (5 - (nota % 5))
    }
    else if (nota < 38) {
        return nota
    }
    else {
        return nota
    }
}


nota(41)