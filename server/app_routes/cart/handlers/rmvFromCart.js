
module.exports = (req, res) => {
  const { id } = req.body
  let newCartProducts = req.session.cartProducts

  req.session.cartProducts = newCartProducts
    .filter((elem) => elem.product._id !== id)

  res.sendStatus(200)
}

