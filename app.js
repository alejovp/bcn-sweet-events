const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const routerProducts = require('./routes/products')

app.use(express.static('public'))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const section = 'feverweed moonlike neuropterology glycogenesis lomentum skunkish dilutive Serdar trichorrhea dharana awash confessionalist lacepiece scobs venal'
  const urlImg = 'img/Perfil2.jpg'
  res.render('home', {section, urlImg})
})

app.use('/products', routerProducts)

app.get('/register', (req, res) => {
  const section = 'Register Section'
  const urlImg = 'img/cupcakes2.jpg'
  res.render('register', {section, urlImg})
})

app.listen(PORT, () =>
  console.log(`BSE Server running at PORT ${PORT}...`))
