function receberSomenteOsParesDeIndicesPares(array) {
    const novoArray = []    
    for (let i = 0; i < array.length; (i += 2)) {
        if (array[i] % 2 == 0) {
            novoArray.push(array[i])
        }
    }
    console.log(novoArray)
}




receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
