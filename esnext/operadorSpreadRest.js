//operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de função

//usar spread com objeto
const functionarios = {nome: 'maria', salario: 455}
const clone = {ativo: true, ...functionarios}
console.log(clone)

//usar spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA, 'rafaela']
console.log(grupoFinal)