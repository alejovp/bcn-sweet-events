const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')

// router.use(bodyParser.urlencoded({ extended: false }))
// router.use(bodyParser.json())

// const getProducts = require('./handlers/getProducts.js')
const renderCupcakes = require('./handlers/renderCupcakes.js')
const renderDetails = require('./handlers/renderDetails.js')

// router.get('/', getProducts)
router.get('/cupcakes', renderCupcakes)
router.get('/details/:id', renderDetails)

module.exports = router
