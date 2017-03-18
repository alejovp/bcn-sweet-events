const express = require('express')
const router = express.Router()

const renderHome = require('./handlers/renderHome.js')

router.get('/', renderHome)

module.exports = router
