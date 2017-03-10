const mongoose = require('mongoose')
const collection = 'products'

const ProductSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  createdAt: Number,
  modifiedAt: Number,
  user_id: String
}, { collection })

module.exports = mongoose.model('Product', ProductSchema)
