console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'
aprovados.push('abia') //adiciona 1 nove elemento no array
console.log(aprovados.length)

aprovados[9] = 'rafael' //é permitido adicionar um elemento em uma posição la pra frente
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //organiza os elementos do array em ordem alfabetica
console.log(aprovados)

delete aprovados[1] // se for deletado um elemento por exemplo no meio do array, ele n vai reorganizar o array, a posição deletada irá ficar undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos','ana']
aprovados.splice(1,1) //deleta, adiciona elemento no array. o 1 parametro vai falar de onde começa e o segundo fala qnts elementos irao ser deletados e adicionados ou so deletados, ou so adicionados
console.log(aprovados)