const Product = require('../../models/Product.js')

module.exports = (req, res) => {
  const { category, title, description, imgURL, ingredients, price } = req.body
  const createdAt = Date.now()
  // const modifiedAt = '---'
  const product = new Product({ category, title, description, imgURL, ingredients, price, createdAt })
  product.save()
    .then(() => {
      res.redirect('/admin/#!/products')
    })
}
