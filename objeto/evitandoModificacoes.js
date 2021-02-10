// Object.preventExtensions
const produto = Object.preventExtensions({ //esse metodo n permite q modifique os atributos, mas sim os seus valores, tbm permiti deletar
    nome: 'qualquer', 
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensivel: ' ,Object.isExtensible(produto)) 

produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'juliana', idade: 35} 
Object.seal(pessoa) //nao permite mudar atributo, apenas valor do atributo, nem deletar, nem adicionar atributo
console.log('selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Objec.freeze = Seal + valores constantes