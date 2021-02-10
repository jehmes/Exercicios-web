function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //o resolvo so passa 1 parametro, pra passar varias coisas pode colocar num objteto
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'que legal')
.then(frase => frase.concact('!?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e))