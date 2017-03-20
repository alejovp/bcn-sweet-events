const express = require('express')
const router = express.Router()

const renderCupcakes = require('./handlers/renderCupcakes.js')
const renderDetails = require('./handlers/renderDetails.js')

router
  .get('/cupcakes', renderCupcakes)
  .get('/details/:id', renderDetails)

module.exports = router
