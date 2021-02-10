const pai = { nome: 'pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) //object.create(pai) ta informando pro objetofilha1 que pai é sua herança
filha1.nome = 'ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { //aqui é o msm exemplo de cima so q ta passando algumas configurações, tipo o freeze, se qr congelar os atributos
    nome: { value: 'bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //mostra atributo e metodo do objeto
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? //hasOwnProperty diz pra retornar os proprios atributos do objeto sem ser da herança
    console.log(key) : console.log(`Por herança: ${key}`)
}