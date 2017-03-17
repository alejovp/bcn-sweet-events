const nodemailer = require('nodemailer')

// const Order = require('../../../models/Order.js')
// const mongoose = require('mongoose')

module.exports = (req, res) => {
    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAILER,
      pass: process.env.EMAIL_PASS
    }
  })

  // const products =
  const { name, email } = req.body

  let cutomerMail = {
    // from: process.env.EMAILER,
    to: `${email}`,
    bcc: 'bcnsweetest@gmail.com',
    subject: `Your order from BCN Sweet Events`,
    text: `Hello ${name}, this is a Test email order`
  }

  // send mail with defined transport object
  transporter.sendMail(cutomerMail,
    (err, response) => {
      if (err) {
        res.send('We had problems sending the email')
      }
      res.sendStatus(200)
    })
}
