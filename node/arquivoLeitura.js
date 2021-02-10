const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono --pode travar o loop por demorar pra proessar tudo
const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

//assincrono  --precisa converter o json, pq ta usando objeto
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//ja converter o json internamente
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta...')
    console.log(arquivos)
})