module.exports = (req, res) => {
  const section = 'cupcakes'
  const paragraph = 'Nuestros Cupcakes te enamorarán por su textura y sabor!. Aquí te presentamos una selección de los mejores, pero si se deseas puedes realizar también un pedido personalizado'
  const urlImg = '/img/cupcakes2.jpg'
  res.render('products', {section, paragraph, urlImg})
}
