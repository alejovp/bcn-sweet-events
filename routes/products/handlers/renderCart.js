module.exports = (req, res) => {
  const section = 'cart'
  const urlImg = '/img/cupcakes2.jpg'
  res.render('shopCart', {section, urlImg})
}
