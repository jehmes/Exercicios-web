//ES8: Object.values/Object.entries
const obj = {}

//melhoras na notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola() {
        return 'oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())


//class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'auau'
    }
}

console.log(new Cachorro().falar())