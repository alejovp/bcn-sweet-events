const Product = require('../../models/Product.js')

module.exports = (req, res) => {
  Product.find()
    .then(products => {
      res.json(products)
    })
    .catch(err => { throw err })
}
