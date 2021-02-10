function aumento(plano, salario) {
    switch (plano) {
        case 'A':
            return salario += salario * 0.1
        case 'B':
            return salario += salario * 0.15
        case 'C':
            return salario += salario * 0.2
        default:
            return 'Plano inválido'
    }
}

console.log(aumento('A', 1000))
console.log(aumento('B', 1000))
console.log(aumento('C', 1000))