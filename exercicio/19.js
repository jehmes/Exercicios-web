function venda(codigo, quant) {
    switch (codigo) {
        case 100:
            return quant * 3
        case 200:
            return `Os hamburguer são: R$${quant * 4},00 `
        case 300:
            return quant * 5.5
        case 400:
            return quant * 7.5
        case 500:
            return quant * 3.5
        case 600:
            return quant * 2.8
        default:
            return 'produto nao existe'
    }
}

console.log(venda(200, 5))