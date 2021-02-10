/*objeto e array sao estruturas indexadas, array com numeros e objeto com textos(pegar um atributo a partir de u identificador)
o set, n é uma estrutura indexada e n permite repetição*/

/*for in intera sob indices e o for of é sob valores (map, set, array, strings, objetos)*/
const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('verstappen') //adiciona um elemento na ultima posição
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('hamilton') //add um elemento na primeira posição do array
console.log(pilotos)

// adicionar
pilotos.splice(2, 0, 'bottas', 'massa') //começa na 2 posição e o 0 é pra n remover(se fosse 1, ele iria remover 1 elemento após o 2), as 2 strings após o 0 é pra adicionar no array na posição 2
console.log(pilotos)

// remover
pilotos.splice(3, 1) //começa na 3 posição remove 1 elemento após a posiçao 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //nnovo array apartir da 2 posição
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //novo array a partir da posição 1 e ate antes da posição 4
console.log(algunsPilotos2)