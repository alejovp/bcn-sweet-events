const express = require('express')
const router = express.Router()

const renderAdmin = require('./handlers/renderAdmin.js')

router.get('/cupcakes', renderAdmin)

module.exports = router
