const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const getOrders = require('./handlers/getOrders.js')
const getProducts = require('./handlers/getProducts.js')
const addProduct = require('./handlers/addProduct.js')
const rmvProduct = require('./handlers/rmvProduct.js')

router
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  .get('/orders', getOrders)
  .get('/products', getProducts)
  .post('/products', addProduct)
  .delete('/products/:id', rmvProduct)

module.exports = router
