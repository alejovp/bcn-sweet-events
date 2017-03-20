const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const renderCart = require('./handlers/renderCart.js')
const addToCart = require('./handlers/addToCart.js')
const rmvFromCart = require('./handlers/rmvFromCart.js')
const addOrder = require('./handlers/addOrder.js')

router
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  .get('/', renderCart)
  // .get('/:id', addToCart)
  .post('/', addToCart)
  .delete('/', rmvFromCart)
  .post('/orders', addOrder)

module.exports = router
