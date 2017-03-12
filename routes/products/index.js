const express = require('express')
const router = express.Router()

// const getProducts = require('./handlers/getProducts.js')
const renderCupcakes = require('./handlers/renderCupcakes.js')
const renderDetails = require('./handlers/renderDetails.js')
const renderCart = require('./handlers/renderCart.js')

// router.get('/', getProducts)
router.get('/cupcakes', renderCupcakes)
router.get('/details/:id', renderDetails)
router.get('/cart', renderCart)

module.exports = router
