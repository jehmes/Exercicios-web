function verificarFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            return 'não vendemos essa fruta aqui'
            break
        case 'kiwi':
            return  'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default :
            return 'erro'
    }
}

console.log(verificarFruta('maçã'))
console.log(verificarFruta('kiwi'))
console.log(verificarFruta('melancia'))
console.log(verificarFruta('laranja'))