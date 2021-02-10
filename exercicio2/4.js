function nomeDoMes(n) {    
    switch (n) {
        case 1:
            return 'janeiro'
        case 2:
            return 'fevereiro'
        case 3:
            return 'março'
        default:
            return 'numero invalido'
    }
}

console.log(nomeDoMes(4))