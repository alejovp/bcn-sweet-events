module.exports = (req, res) => {
  const { cartNumber, cartProducts } = req.session

  const section = 'cart'
  const urlImg = '/img/cupcakes2.jpg'
  res.render('shopCart', { cartNumber, cartProducts, section, urlImg })
}
