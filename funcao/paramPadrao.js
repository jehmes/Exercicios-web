//estrategia 1 para erar valor padrao
function soma1(a, b, c) {
    a = a || 1  //isso qr dizer se o 'a' for falso ira retornar o valor do '1'. poderia ser outro valor como 2, 5, 20, 'teste'
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2 , 3), soma1(0, 0, 0))

//estrategia 2, 3 e 4 para gerar valor padrao
function soma2 (a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c      //esse recurso é seguro pra ser usado
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrao do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))