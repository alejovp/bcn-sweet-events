const Product = require('../../../models/Product.js')

module.exports = (req, res) => {
  const { id } = req.params
  const { cartNumber } = req.session
  const section = 'details'
  // const paragraph = ''
  const urlImg = '/img/cupcakes2.jpg'

  Product.findById(id)
    .then(product => {
      res.render('detail', {cartNumber, product, section, urlImg})
    })
    .catch(err => { throw err })
}
