const Order = require('../../models/Order.js')

module.exports = (req, res) => {
  const { id } = req.params
  const modifiedAt = Date.now()
  const status = false

  Order.findByIdAndUpdate(id, { status, modifiedAt })
    .then((order) => {
      // console.log(`Task has been removed`)
      // res.redirect('/tasks')
      res.status(200).json(order)
    })
    .catch(err => res.status(500).json(err))
}
