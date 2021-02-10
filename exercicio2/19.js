function calcularMedia(array) {
    const soma = (total, valor) => total + valor
    console.log(array.reduce(soma)/array.length) 
}


calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
