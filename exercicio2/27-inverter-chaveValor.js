function inverter(object) {
    let invertido = {}
    Object.entries(object).forEach(e => {
        invertido[e[1]] = e[0]

    })
    console.log(invertido)
}


function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
        .map(parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(paresDeChaveValorInvertidos)
}




inverter({ a: 1, b: 2, c: 3 }) // retornará { 1: "a", 2: "b", 3: "c"}





