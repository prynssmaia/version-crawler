const express = require('express')
const routes = express.Router()
const path = require('path')
const versao_data = require('../versao_data.json')
const ejs = require('ejs')


const views = path.join(__dirname, '/views/')



routes.get('/', (req, res) => {
    res.render(views + 'index')

    // ejs.renderFile(path.join(__dirname, 'views', 'index.ejs'), { versao_data },function (err, data) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(data)
    //   }
    // })
  })

module.exports = routes