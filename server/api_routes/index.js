const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const passport = require(__base + 'config/passport')

const getOrders = require('./handlers/getOrders.js')
const getProducts = require('./handlers/getProducts.js')
const addProduct = require('./handlers/addProduct.js')
const rmvProduct = require('./handlers/rmvProduct.js')
const doneOrder = require('./handlers/doneOrder.js')

// all these routes require JWT token
router
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  // .use(passport.authenticate('jwt', { session: false }))

router
  .get('/orders', getOrders)
  .put('/orders/:id', doneOrder)
  .get('/products', getProducts)
  .post('/products', addProduct)
  .delete('/products/:id', rmvProduct)

module.exports = router
