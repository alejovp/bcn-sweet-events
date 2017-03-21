const Product = require('../../models/Product.js')

module.exports = (req, res) => {
  const { id } = req.params

  Product.findByIdAndRemove(id)
    .then((product) => {
      // console.log(`Task has been removed`)
      // res.redirect('/tasks')
      res.status(200).json(product)
    })
    .catch(err => res.status(500).json(err))
}
