/*objeto e array sao estruturas indexadas, array com numeros e objeto com textos(pegar um atributo a partir de u identificador)
o set, n é uma estrutura indexada e n permite repetição*/
const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}


console.log(Object.keys(pessoa))   //retorna os atributos do objeto
console.log(Object.values(pessoa)) //retorna os valores do objeto

console.log(Object.entries(pessoa))//retorna os valores e atributos do objeto

Object.entries(pessoa).forEach(e => {               //metodo 1 - normal
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { //metodo 2 - Destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', //to configurando esse atributo pra ser acessado pela funçao keys por exemplo, é tipo um freeze
    {
        enumerable: true,
        writable: false,
        value: '01/01/2019'

    }) 

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//Object.assign (ECAMAScript 2015)
const dest = { a: 1 }  
const o1 = { b: 1 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //Essa função junta todos os atriutos e valores no objeto dest

Object.freeze(obj)
obj.c = 1234
console.log(obj)