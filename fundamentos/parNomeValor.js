const saudacao = 'opa'

function exec() {
    const saudacao = 'fala'
    return saudacao
}

const Cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 70,
    endereco: {
        logradouro: 'rua tal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)