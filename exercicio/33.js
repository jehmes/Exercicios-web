let vetor1 = [1, 2, 3, 4]
let vetor2 = ['oi', 'ola', 'ok', 'tudo']
let vetor3 = [1.1, 2.2, 3.3, 4.4]

function listar (vetor1, vetor2, vetor3) {
   return  vetor1.concat(vetor2, vetor3)
}

console.log(listar(vetor1, vetor2, vetor3))