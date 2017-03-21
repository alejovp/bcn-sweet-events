const Order = require('../../models/Order.js')

module.exports = (req, res) => {
  Order.find()
    .then(orders => {
      res.json(orders)
    })
    .catch(err => { throw err })
}
