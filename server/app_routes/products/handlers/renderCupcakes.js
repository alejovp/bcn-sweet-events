const Product = require('../../../models/Product.js')

module.exports = (req, res) => {
  const { cartNumber } = req.session
  const section = 'cupcakes'
  const paragraph = 'Nuestros Cupcakes te enamorarán por su textura y sabor!. Aquí te presentamos una selección de los mejores, pero si deseas puedes realizar también un pedido personalizado'
  const urlImg = '/img/cupcakes2.jpg'
  Product.find()
    .then(products => {
      res.render('products', { cartNumber, products, section, paragraph, urlImg })
    })
    .catch(err => { throw err })
}
