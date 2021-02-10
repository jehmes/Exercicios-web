function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(3))



function fatorial2 (n) {
    let r = 1
    for (let i = 1; i <= n; i++) {
        r *= i        
    }
    return r
}

console.log(fatorial2(3))