function extenso(numero) {
    switch (numero) {
        case 1:
            return 'um'
        case 2:
            return 'dois'
        default:
            return 'numero fora do inervalo'
    }
}

console.log(extenso(1))
console.log(extenso(2))
console.log(extenso(11))