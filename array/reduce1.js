const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual) //isso é so pra mostrar a execução passo a passo
    return acumulador + atual //ele ta pegando map(a => a.nota), só a nota e somando por exemplo: nota[0] + nota[1]
})                            //o acumulador guarda o restulado e soma com o proximo

console.log(resultado)