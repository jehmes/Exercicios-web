function receberPrimeiroEUltimoElemento (array) {
    let novoArray = []
    let elemento1 = array[0]
    let elemento2 = array[array.length - 1]
    novoArray = [elemento1, elemento2] 
    console.log(novoArray)
}



receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
