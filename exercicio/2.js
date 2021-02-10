function triangulo(a, b, c){
    if (a == b && a == c) {
        console.log('equilátero')
    }
    else if (a == b || a == c || b == c) {
        console.log('isósceles')
    }
    else console.log('escaleno')
}

triangulo(2, 5, 3)


