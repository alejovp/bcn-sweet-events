const express = require('express')
const path = require('path')
const session = require('express-session')

// const FileStore = require('session-file-store')(session)
const app = express()
const appRoutes = require('./app_routes')
const apiRoutes = require('./api_routes')

app.set('view engine', 'pug')
app.set('views', (path.join(__dirname, 'views')))

app.use(express.static(path.join(__dirname, '../public')))

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

app.use('/admin', express.static(path.join(__dirname, '../admin')))
app.use('/', appRoutes)
app.use('/api', apiRoutes)

module.exports = app
