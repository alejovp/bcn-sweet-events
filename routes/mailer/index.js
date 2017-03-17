const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

const orderMail = require('./handlers/orderMail.js')

router.post('/', orderMail)

module.exports = router
