const express = require('express')
const router = express.Router()

const getProducts = require('./handlers/getProducts.js')
const renderCupcakes = require('./handlers/renderCupcakes.js')

// router.get('/', getProducts)
router.get('/cupcakes', renderCupcakes)

module.exports = router
