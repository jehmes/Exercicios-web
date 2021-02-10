function filtrarNumeros(array) {    
    const novoArray = []
    array.forEach(n => {
        if (typeof n === "number") {  //<- PRA SABER SE É UM NUMERO
            novoArray.push(n)
        }
    })
    console.log(novoArray)
}




filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []

