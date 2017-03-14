const Product = require('../../../models/Product.js')

module.exports = (req, res) => {
  const { id } = req.params

  Product.findById(id)
    .then(product => {
      req.session.cartProducts.unshift(product)
      res.sendStatus(200)
    })
    .catch(err => { throw err })
}

