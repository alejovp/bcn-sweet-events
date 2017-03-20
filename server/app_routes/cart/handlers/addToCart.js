const Product = require('../../../models/Product.js')

// Ad product to cart with a get request
// module.exports = (req, res) => {
//   const { id } = req.params

//   Product.findById(id)
//     .then(product => {
//       req.session.cartProducts.unshift(product)
//       res.sendStatus(200)
//     })
//     .catch(err => { throw err })
// }

module.exports = (req, res) => {
  const { id, qtty } = req.body

  Product.findById(id)
    .then(product => {
      req.session.cartProducts.unshift({product, qtty})
      res.sendStatus(200)
    })
    .catch(err => { throw err })
}

