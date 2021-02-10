const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function (e) { //o map não modifica o array original, ele tem 3 parametros: (Valor, Índce, Array)
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado1 = nums.map(soma10).map(triplo).map(paraDinheiro) //aqui faz uma cadeia de alteração usando o map com as funções q foram criadas acima
console.log(resultado1)