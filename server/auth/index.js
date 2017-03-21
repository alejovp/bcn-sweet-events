const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const passport = require(__base + 'config/passport')

const register = require('./handlers/register')
const login = require('./handlers/login')

router
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(passport.initialize())

  .post('/register', register)
  .post('/login', passport.authenticate('local', { session: false }), login)

module.exports = router
