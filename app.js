const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
// const FileStore = require('session-file-store')(session)

const app = express()
const PORT = process.env.PORT || 3000
const urlDB = process.env.DB_URI || 'mongodb://localhost:27017/b_s_e'

const routerProducts = require('./routes/products')
// const routerAdmin = require('./routes/admin')
const routerCart = require('./routes/cart')
const routerMailer = require('./routes/mailer')

mongoose.connect(urlDB)
mongoose.Promise = global.Promise

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  name: 'bse-server-session-cookie-id',
  secret: 'this is a secret',
  saveUninitialized: true,
  resave: false
  // store: new FileStore()
}))

app.use((req, res, next) => {
  let cartProducts = req.session.cartProducts
  // let cartNumber = req.session.cartNumber
  if (!cartProducts) {
    req.session.cartProducts = []
    req.session.cartNumber = 0
  } else {
    req.session.cartNumber = cartProducts.length
  }

  next()
})

app.get('/', (req, res) => {
  const { cartNumber } = req.session
  const section = 'home'
  const paragraph = 'Endulza tu fiesta con nuestros productos elaborados artesanalmente y con nuestras mesas especiales'
  const urlImg = 'img/Perfil2.jpg'
  res.render('home', { cartNumber, section, paragraph, urlImg })
})

app.use('/products', routerProducts)
// app.use('/admin', routerAdmin)
app.use('/cart', routerCart)

app.use('/mailer', routerMailer)

app.get('/register', (req, res) => {
  const section = 'Register Section'
  const urlImg = 'img/cupcakes2.jpg'
  res.render('register', {section, urlImg})
})

app.listen(PORT, () =>
  console.log(`BSE Server running at PORT ${PORT}...`))
