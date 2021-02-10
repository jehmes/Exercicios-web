const { promises } = require("fs")

const primeiroElemento = arrayOuString => arrayOuString[0] //essa função se repetiu 2 vezes pq basicamente fazia msms função, pegar o [0] do array e dps [0] da string pra retornar a primeira letra
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['ana', 'bia', 'carlos', 'daniel'])
}) 
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)