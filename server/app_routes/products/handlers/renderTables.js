const Product = require('../../../models/Product.js')

module.exports = (req, res) => {
  const { cartNumber } = req.session
  const section = 'tables'
  const paragraph = 'Nuestras mesas temáticas y personalizadas llenarán de color y sabor su fiesta.'
  const urlImg = '/img/tables.jpg'
  Product.find()
    .then(products => {
      res.render('tables', { cartNumber, products, section, paragraph, urlImg })
    })
    .catch(err => { throw err })
}
