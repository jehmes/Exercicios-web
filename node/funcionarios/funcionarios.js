const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//2 FORMAS DE FAZER
/*axios.get(url).then(response => {
    const funcionarios = response.data
    
    let paisChina = []
    let sexoFeminino = []
    let organizarSalario = []
    funcionarios.forEach(n => {
          if (n.pais == 'China') {            
            paisChina.push(n)
        }   
    })

    paisChina.forEach(n => {
        if (n.genero == 'F') {
            sexoFeminino.push(n)
        }
    }) 

    function corrigirNumero (a, b) {
        return a.salario - b.salario
    }

    organizarSalario = sexoFeminino.sort(corrigirNumero) 

   
    console.log(`A mulher Chinesa com menor salário é ${organizarSalario[0].nome}`)
    
   
})*/



const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
       
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)    
   
    console.log(func)
    
   
})