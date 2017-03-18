
module.exports = (req, res) => {
  const { cartNumber } = req.session
  const section = 'home'
  const paragraph = 'Endulza tu fiesta con nuestros productos elaborados artesanalmente y con nuestras mesas especiales'
  const urlImg = 'img/home/Perfil2.jpg'
  res.render('home', { cartNumber, section, paragraph, urlImg })
}
