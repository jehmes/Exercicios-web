// usando a notaçao literal
const obj1 = {}
console.log(obj1, typeof obj1)

//object em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2, typeof obj2)

//funções construtores
function Produto(nome, preco, desc) {
    this.nome = nome //o this ta tornando o atributo publico fora da função
    this.getPrecoComDesconto = () => {  //o atributo preco e desc não tem como alterar-los depois de criar o Produto. Estão encapsulados, o objeto interno tem acesso a esses valores
            return preco * (1 - desc)
    }
}  

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto(), typeof p1)


// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30- faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4)
const f2 = criarFuncionario('maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario(), typeof f1)


// object.create (herança)
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)


// uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "sou um json"}')
console.log(fromJSON.info)