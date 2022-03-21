const express = require('express')
const routes = require('./routes')
const port = 3000
const versao_data = require('../versao_data.json')

const server = express()
server.set('view engine', 'ejs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(routes)

server.locals.versao_data = versao_data

server.listen(port, () => console.log(`Rodando em http://localhost:${port}`))

