const escola = [{
    nome: 'turma m1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    }, {
        nome: 'ana',
        nota: 9.3
    }]
}, {
    nome: 'turma m2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    }, {
        nome: 'roberta',
        nota: 7.3
    }]
}]  



const getNotaDoAluno = aluno => aluno.nota //o mais importante dessa função é .nota pq o 'aluno' é apenas um nome de variavel
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)
console.log([].concat([8.1, 9.3], [8.9, 7.3]))



//esse flatMap nao existe originalmente no JS, foi criado manualmente abaixo
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)