const express = require('express')
const router = express.Router()

const renderCupcakes = require('./handlers/renderCupcakes.js')

router.get('/cupcakes', renderCupcakes)

module.exports = router
