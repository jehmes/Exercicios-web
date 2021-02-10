function somarNumeros(array) {
    let resultado = 0
    array.reduce((total, indice) => {
        return total += indice
    })
    console.log(resultado)
}

function somarNumeros(array) {
    const soma = (total, indice) => total + indice        
    console.log(array.reduce(soma))

} 



somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
