// pessoa -> 12 -> {...}
const pessoa = {nome: 'joao'}  
pessoa.nome = 'pedro'  //se o atributo é constante, pq eu consigo atribuir um novo valor a ele?
console.log(pessoa)    //pq o que ta sendo mudado é o atributo e não o objeto. A criação de um objeto 
                       //é quando colocamos {}. Abaixo tem um exemplo de erro na constante
                       
                       
// pessoa -> 456 -> {...}
// pessoa = { nome: 'ana} //o que ta acontecendo aqui é que não pode tentar criar um novo objeto
                          //as {} ta dizendo q esta criando um novo objeto para aquela constante
                          

Object.freeze(pessoa) //Ele congela o objeto para q n possa nem mudar os atributos nem deletar

pessoa.nome = 'maria'
pessoa.end = 'rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'joao'})