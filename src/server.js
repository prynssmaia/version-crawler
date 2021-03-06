const express = require('express')
const routes = require('./routes')
const port = 3000
const versao_data = require('../versao_data.json')
const county = require('../municipios.json')
const getVersion = require('../src/crawler')
const schedule = require('node-schedule');


const server = express()
server.set('view engine', 'ejs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(routes)

server.locals.versao_data = versao_data
server.locals.county = county

server.listen(port, () => console.log(`Rodando em http://localhost:${port}`))

//Run getVersion at 3:13AM
schedule.scheduleJob('13 3 * * *', function(){
    getVersion()
    console.log('Task Done!')
});
