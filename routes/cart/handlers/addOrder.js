const Order = require('../../../models/Order.js')

module.exports = (req, res) => {
  const { name } = req.body
  const user_id = req.user.id
  const status = true
  const createdAt = Date.now()
  // const modifiedAt = '---'
  const order = new Order({ title, description, done, createdAt, user_id })
  order.save()
    .then(() => {
      res.redirect('/tasks')
    })
}
