function simboloMais1(n) {
    let string = ''
    for (let i = 0; i < n; i++) {
        string += '+'
    }
    console.log(string)
}


function simboloMais2(quantidade) {
    return "+".repeat(quantidade)
}


function simboloMais3(quantidade) {
    return Array(quantidade).fill('+').join('')
}

console.log(Array(2).fill('oi').join(' '))

simboloMais1(2) // retornará "++"
simboloMais1(4) // retornará "++++"



