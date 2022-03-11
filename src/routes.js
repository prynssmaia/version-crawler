const express = require('express')
const routes = express.Router()
const path = require('path')

const views = path.join(__dirname, '/views/')



routes.get('/', (req, res) => {
    res.render(views + 'index')
  })

module.exports = routes