const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null,'.')
    },
    filename:function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.send('Concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,//tudo q vier no req.body, eu vou devolver pro res.send, junto com id
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query  = /parOuImpar/:numero -> /parOuImpar?numero=1
    //req.params = /parOuImpar/:numero -> /parOuImpar/1
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('executando'))