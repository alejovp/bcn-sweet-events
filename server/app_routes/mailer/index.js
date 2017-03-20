const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const orderMail = require('./handlers/orderMail.js')

// router.post('/', orderMail)
router
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  .get('/', orderMail)

module.exports = router
