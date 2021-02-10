/*Windows PowerShell
Copyright (C) Microsoft Corporation. Todos os direitos reservados.


PS C:\Users\Thales\Desktop\exercicios-js> cd node
PS C:\Users\Thales\Desktop\exercicios-js\node> cd projeto
PS C:\Users\Thales\Desktop\exercicios-js\node\projeto> npm init -y         <- CRIAR PROJETO COM PACKAGE.JSON
Wrote to C:\Users\Thales\Desktop\exercicios-js\node\projeto\package.json:

{
  "name": "projeto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


PS C:\Users\Thales\Desktop\exercicios-js\node\projeto> npm i --save express@4.16.2 -E    <- INSTALAR O EXPRESS COM VERSÃO FIXA
npm notice created a lockfile as package-lock.json. You should commit this file.       
npm WARN projeto@1.0.0 No description
npm WARN projeto@1.0.0 No repository field.

+ express@4.16.2
added 51 packages from 47 contributors and audited 51 packages in 8.865s
found 0 vulnerabilities

PS C:\Users\Thales\Desktop\exercicios-js\node\projeto> */



const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados.js')

//essa função como ta .use e n .get, qlqr requisição vai ser acionado essa função, se fosse o .get, precisaria de um local tipo: /produtos
//o body.parse vai tratar todos os arquivos tipo urlencoded. vai transformar o body em objeto pra q possa manipular
app.use(bodyParser.urlencoded())

app.get('/produtos', (req, res, next) => { //Ta usando o middleware mas n esta chamando o next
    res.send(bancoDeDados.getProdutos())  //req = requisição, res = resposta. nesse caso ta enviando uma resposta um objeto, o objeto vai ser convertido pra JSON automaticamente pelo metodo send
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //    JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,      //esse req.params.id é digitado na url do postman
        nome: req.body.nome,    //esse req.body.nome é digitado no body
        preco: req.body.preco
    })
    res.send(produto) //    JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)  //como pra excluir so precisa do id, entao so tem o id como parametro
    res.send(produto) //    JSON
})


app.listen(porta, () => {
    console.log(`Executando na porta ${porta}`)
})
