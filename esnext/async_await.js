const { promises } = require("fs")

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {            
            resolve()
        }, tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {  //aqui é parecido com a de cima, qnd coloca async ele vai retornar uma promise igual a funct de cima
    return 20
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`async-await ${valor}`)

    await esperarPor(1500)
    console.log(`async-await ${valor+1}`)

    await esperarPor(1500)
    console.log(`async-await ${valor+2}`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()