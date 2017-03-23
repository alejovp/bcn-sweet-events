const Product = require('../../../models/Product.js')

module.exports = (req, res) => {
  const { cartNumber } = req.session
  const section = 'cakes'
  const paragraph = 'Nuestras tartas llenarán de color y sabor tu fiesta!. Aquí te presentamos una selección de las más demandadas, pero puede realizar también un pedido personalizado y adecuado a su evento.'
  const urlImg = '/img/cakes/cake_1.jpg'
  Product.find()
    .then(products => {
      res.render('products', { cartNumber, products, section, paragraph, urlImg })
    })
    .catch(err => { throw err })
}
