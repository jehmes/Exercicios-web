const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'ana', nota: 8.7, bolsista: true}
]

//todos alunos sao bolsistas?

//isso aqui vai como parametro da função reduce, onde o resultado é o acumulador e o bolsista é um retorno boolean
//então ele pega o acumulador que nesse caso é true ou false, pq o acumulador é o bolsista na posição [0] pq o .map 
//fez uma string de atributos: bolsistas. Então o acumulador que nesse exemplo é o 1 valor do array que é: false, irá 
//fazer: false && true(true pq o 2 elemento é o true no exemplo)? o resultado disso, irá verificar com o prox, assim ate o final do array
//de bolsistas. Se qnd passar toda o array, o resultado for true, ele irá retornar true
const todosBolsistas = (resultado, bolsista) => resultado && bolsista  //o texto acima se refere a essa função

const bolsistasAluno = alunos => alunos.bolsista
console.log(alunos.map(bolsistasAluno).reduce(todosBolsistas))



//algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(bolsistasAluno).reduce(algumBolsista))