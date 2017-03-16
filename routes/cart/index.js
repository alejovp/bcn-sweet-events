const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

const renderCart = require('./handlers/renderCart.js')
const addToCart = require('./handlers/addToCart.js')
const rmvFromCart = require('./handlers/rmvFromCart.js')
const addOrder = require('./handlers/addOrder.js')

router.get('/', renderCart)
// router.get('/:id', addToCart)
router.post('/', addToCart)
router.delete('/', rmvFromCart)
router.post('/orders', addOrder)

module.exports = router
