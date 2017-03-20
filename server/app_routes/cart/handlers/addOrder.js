const Order = require('../../../models/Order.js')

module.exports = (req, res) => {
  const { name, email, phone } = req.body
  const products = req.session.cartProducts
  const status = true
  const createdAt = Date.now()
  // const modifiedAt = '---'
  const order = new Order({ name, email, phone, createdAt, products, status })
  order.save()
    .then((order) => {
      req.session.order = order
      res.redirect('/mailer')
    })
    .catch(err => { throw err })
}
