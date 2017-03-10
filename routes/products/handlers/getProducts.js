module.exports = (req, res) => {
  db.collection('products')
    .find()
    .toArray((err, products) => {
      if (err) throw err
      res.json(products)
      console.log(products)
    })
}

