const express = require('express')
const router = express.Router()

const renderCupcakes = require('./handlers/renderCupcakes.js')
const renderDetails = require('./handlers/renderDetails.js')
const renderCakes = require('./handlers/renderCakes.js')
const renderTables = require('./handlers/renderTables.js')

router
  .get('/cupcakes', renderCupcakes)
  .get('/cakes', renderCakes)
  .get('/tables', renderTables)
  .get('/details/:id', renderDetails)

module.exports = router
