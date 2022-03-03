const express = require('express')
const routes = require('./routes')
const port = 3000

const server = express()
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(routes)

server.listen(port, () => console.log(`Rodando em http://localhost:${port}`))

