const fs = require('fs')
const thereIsDotEnv = fs.existsSync('.env')
if (thereIsDotEnv) require('dotenv').config()

global.__base = __dirname + '/server/'

const app = require('./server/app')
const db = require('./server/config/db')

const DB_URI = process.env.DB_URI
const PORT = process.env.PORT

console.log(`connecting to ${DB_URI}...`)

db.open(DB_URI)
app.listen(PORT, () =>
  console.log(`BSE Server running at PORT ${PORT}...`))
