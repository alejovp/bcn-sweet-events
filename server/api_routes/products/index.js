const express = require('express')
const router = express.Router()

const getProducts = require('./handlers/getProducts.js')

router.get('/', getProducts)

module.exports = router
