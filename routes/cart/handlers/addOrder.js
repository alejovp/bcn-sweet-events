const Order = require('../../../models/Order.js')

module.exports = (req, res) => {
  const { name, email, phone } = req.body
  const products = req.session.cartProducts
  const status = true
  const createdAt = Date.now()
  // const modifiedAt = '---'
  const order = new Order({ name, email, phone, createdAt, products, status })
  order.save()
    .then(() => {
      req.session.cartProducts = []
      // res.redirect('/cart')
      res.sendStatus(200)
    })
    .catch(err => { throw err })
}
