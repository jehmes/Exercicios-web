const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua ',
        numero: 2
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)


const {endereco: { logradouro, numero} } = pessoa
console.log(logradouro, numero)