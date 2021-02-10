//com promise..
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}
//Async é tipo qnd algo demora um tmp rpa fazr(a tarefa vai fazendo 1 de cada vez) enquanto o sincrono no msm instante a tudo pronto
//diferente desse metodo [].concat(...turmas) q vai preenchendo 1 por 1, const ta = await getTurma('A') nesse caso ja vai adicionando os resultado numa constante de uma vez

//recruso do ES8
//Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {  //tem q marcar a variavel com async pra poder usar o await
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}// retorna um objeto AsyncFunction

//usou o then pq o resulado embora pareca ser um array, é um AsyncFunction
obterAlunos()
.then(alunos => alunos.map(a => a.nomes))
.then(nomes => console.log(nomes))