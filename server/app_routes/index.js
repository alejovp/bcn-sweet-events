const express = require('express')
const router = express.Router()

const renderHome = require('./home')
const routerProducts = require('./products')
const routerCart = require('./cart')
const routerMailer = require('./mailer')

router

  .use('/', renderHome)

  .use('/products', routerProducts)

  .use('/cart', routerCart)

  .use('/mailer', routerMailer)

  .get('/register', (req, res) => {
    const section = 'Register Section'
    const urlImg = 'img/cupcakes2.jpg'
    res.render('register', {section, urlImg})
  })

module.exports = router
