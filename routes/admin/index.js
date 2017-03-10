const express = require('express')
const router = express.Router()

const addProduct = require('./handlers/addProduct.js')

router.post('/', addProduct)

module.exports = router
