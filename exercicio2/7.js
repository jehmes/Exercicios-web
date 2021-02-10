function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo
    }
   
        return numero > minimo && numero < maximo
    
}

console.log(estaEntre(60, 50, 100)) // retornará true
console.log(estaEntre(16, 460, 5)) // retornará false
console.log(estaEntre(3, 3, 150, true)) // retornará false
console.log(estaEntre(3, 150, 3, true)) // retornará true



