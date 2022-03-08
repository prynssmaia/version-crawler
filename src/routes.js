const express = require('express')
const routes = express.Router()
const path = require('path')
const versaodata = require('../versao_data.json')

const views = path.join(__dirname, '/views/')



routes.get('/', (req, res) => {
    res.sendFile('index.html')
  })

module.exports = routes