//tagged templates - processa o template dentro de uma funçao
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'iuta string'
}

const aluno = 'gui'
const situacao = 'aprovado'
console.log(tag `${aluno} esta ${situacao}`)