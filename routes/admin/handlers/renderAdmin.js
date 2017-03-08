module.exports = (req, res) => {
  const section = 'Sweet Cupcakes'
  const urlImg = '/img/cupcakes2.jpg'
  res.render('adminScreen', {section, urlImg})
}
