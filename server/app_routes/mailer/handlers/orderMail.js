const nodemailer = require('nodemailer')

module.exports = (req, res) => {
    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAILER,
      pass: process.env.EMAIL_PASS
    }
  })

  const { order } = req.session
  console.log(order)
  const { name, email, _id } = order

  let customerMail = {
    // from: process.env.EMAILER,
    to: `${email}`,
    bcc: 'bcnsweetest@gmail.com',
    subject: `Your order from BCN Sweet Events`,
    text: `Hola ${name}, 

      Su orden con número ${_id} ha sido recibida con exito, muchas gracias por elegir a BCN Sweet Events.

    Reciba un gran saludo y buen provecho!!,


    BCN Sweet Events.`
  }

  // send mail with defined transport object
  transporter.sendMail(customerMail,
    (err, response) => {
      if (err) {
        res.send('We had problems sending the email')
      }
      req.session.cartProducts = []
      res.redirect('/cart')
    })
}
