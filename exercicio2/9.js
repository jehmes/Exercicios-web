function repetir(elemento, vezes) {
    let array = []
    for (let i = 0; i < vezes; i++) {
        array.push(elemento)
    }
    console.log(array)
}

repetir("código", 2) // retornará ["código", "código"]
repetir(9, 3) // retornará [7, 7, 7]