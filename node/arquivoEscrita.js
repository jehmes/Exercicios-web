const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1249,
    desconto: 0.15
}


//ele gera um arquivo json --__dirname é uma constante do node que referencia o diretorio atual
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo')
})