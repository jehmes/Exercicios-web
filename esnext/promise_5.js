const { createCipher } = require("crypto")
const { Resolver } = require("dns")

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject("ocorreu um erro")
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
      
    })
}

funcionarOuNao('testando...', 0.5)
.then(v => `Valor ${v}`)
.then(
    v => console.log(v),
  //  err => console.log(`Erro especifico: ${err}`) //n é bom fazer isso, pq esse catch vai ser o primeiro a ser encontrado se houver um erro la em cima no try catch ou nos then abaixo 
)
.then(() => console.log('quase fim'))
.catch(err => console.log(`Erro ${err}`))
.then(() => console.log('fim'))