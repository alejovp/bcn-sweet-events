const express = require('express')
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')

const thereIsDotEnv = fs.existsSync('.env')
if (thereIsDotEnv) require('dotenv').config()
// const FileStore = require('session-file-store')(session)

const app = express()
const PORT = process.env.PORT
const urlDB = process.env.DB_URI

const routerHome = require('./routes/home')
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
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: false
  // store: new FileStore()
}))

app.use((req, res, next) => {
  let { cartProducts } = req.session
  let order = req.session.order || ''
  if (!cartProducts) {
    req.session.cartProducts = []
    req.session.cartNumber = 0
  } else {
    req.session.cartNumber = cartProducts.length
    req.session.order = order
  }

  next()
})

app.use('/', routerHome)

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
