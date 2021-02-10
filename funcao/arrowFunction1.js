let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//so se tiver função com 1 parametro e com 1 linha. quando tira chaves o retorno fica implicito
dobro = a => 2 * a

console.log(dobro(Math.PI))


//sem parametro
let ola = function () {
    return 'ola'
}

ola = () => 'ola'

console.log(ola())


