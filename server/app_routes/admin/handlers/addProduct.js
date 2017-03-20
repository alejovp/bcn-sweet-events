const Product = require('../../../models/Product.js')

module.exports = (req, res) => {
  const { category, title, description } = req.body
  // const user_id = req.user.id
  const createdAt = Date.now()
  const product = new Product({ category, title, description, createdAt })
  product.save()
    .then(() => {
      res.redirect('/prodList')
    })
}
