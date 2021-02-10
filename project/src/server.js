const axios = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors()) //ele permite eu fazer comunicações da minha api

const access_key = '4d0b056957bfcccf0690ee0b9bf3c04e'


app.get('/', async (req, res) => {
  const { data } = await axios(`http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`)

  return res.json(data)
})

app.get('/city', async (req, res) => {  //QUERY /parOuImpar/:numero -> /parOuImpar?numero=1

  const lugar = JSON.stringify(req.query.query)
  const { data } = await axios(`http://api.weatherstack.com/current?access_key=${access_key}&query=${lugar}`)
  res.send(data)
 
})

app.listen('4567')







// const access_key = '4d0b056957bfcccf0690ee0b9bf3c04e'
// const query = 'New York'

// axios.get(`http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`)  
//   .then(response => {
//     const apiResponse = response.data
//     console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`)
//   }).catch(error => {
//     console.log(error)
//   });

