const mongoose = require('mongoose')
const collection = 'orders'

const OrdersSchema = new mongoose.Schema({
  status: Boolean,
  product_id: String,
  qtty: Number,
  amount: Number,
  createdAt: Number,
  modifiedAt: Number,
  name: String,
  email: String,
  phone: Number

}, { collection })

module.exports = mongoose.model('Order', OrdersSchema)
