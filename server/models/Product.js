const mongoose = require('mongoose')
const collection = 'products'

const ProductSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  ingredients: Array,
  packs: Array,
  price: Number,
  imgURL: String,
  createdAt: Number,
  product_id: String,
  reviews: Array
}, { collection })

module.exports = mongoose.model('Product', ProductSchema)
