// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //não faça isso

const avo = { attr1: 'a' }
const pai = { __proto__: avo, attr2: 'b', attr3: '3' }
const filho = { __proto__: pai, attr3: 'c' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) { //acedito que o this é pra informar que os atrributos/metodos escritos com this sao do proprio objeto
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
        
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}` //o this.modelo pega o modelo do prorpio objeto, o super.status() pega o metodo do objeto pai
    }   //o super ta pegando o metodo do pai, embora o bojeto volvo tenha o metodo status, mas qnd se coloca super em vez de this, ele pega o metodo herdado
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())