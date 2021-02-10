function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado (o let, const ou var tora o atributo ou metodo privado)
    let velocidadeAtual = 0

    //metodo publico 
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }

    }

    // metodo publico (o this torna o metodo ou parametro publico)
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro //se nao passou parametro () ele ira tomar como padrao 'velocidadeMaxima = 200, delta = 5' que foi construida na função
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) //quando passo parametros, ele sobrescreve os parametros padroes
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())