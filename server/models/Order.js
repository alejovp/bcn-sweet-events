const mongoose = require('mongoose')
const collection = 'orders'

const OrdersSchema = new mongoose.Schema({
  status: Boolean,
  products: Array,
  createdAt: Number,
  modifiedAt: Number,
  name: String,
  email: String,
  phone: Number

}, { collection })

module.exports = mongoose.model('Order', OrdersSchema)
