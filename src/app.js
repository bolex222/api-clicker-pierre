const { config } = require('../config/configuration.json')
const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  console.log('ici')
  next()
})
app.get('/', (req, res, next) => {
  res.send('hello world!')
})
app.listen(config.port, () => {
  console.log(`api-clicker is listening on port ${config.port}`)
})