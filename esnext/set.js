const { time } = require("console")

/*objeto e array sao estruturas indexadas, array com numeros e objeto com textos(pegar um atributo a partir de u identificador)
o set, n é uma estrutura indexada e n permite repetição*/
const times = new Set()
times.add('Vasco')
times.add('Sao Saulo').add('Palmeiras').add('Corinthians')
times.add('Vlamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('flamengo')
console.log(times.has('Flamengo'))

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
