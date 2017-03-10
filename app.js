const express = require('express')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000
// const urlDB = process.env.DB_URI || 'mongodb://localhost:27017/b_s_e'

const routerProducts = require('./routes/products')
// const routerAdmin = require('./routes/admin')

// mongoose.connect(urlDB)
// mongoose.Promise = global.Promise

app.use(express.static('public'))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const section = 'home'
  const paragraph = 'Endulza tu fiesta con nuestros productos elaborados artesanalmente y con nuestras mesas especiales'
  const urlImg = 'img/Perfil2.jpg'
  res.render('home', {section, paragraph, urlImg})
})

app.use('/products', routerProducts)
// app.use('/admin', routerAdmin)

app.get('/register', (req, res) => {
  const section = 'Register Section'
  const urlImg = 'img/cupcakes2.jpg'
  res.render('register', {section, urlImg})
})

app.listen(PORT, () =>
  console.log(`BSE Server running at PORT ${PORT}...`))
