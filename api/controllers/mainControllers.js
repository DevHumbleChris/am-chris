require('dotenv/config')
const sgMail = require('@sendgrid/mail')
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
module.exports = {
  sendMail: async (req, res) => {
    try {
      // sgMail.setApiKey(process.env.CONTACT_API_KEY)
      // const msg = {
      //   to: 'christopherodhiambo254@gmail.com',
      //   from: 'christopherodhiambo254@gmail.com',
      //   subject: req.body.subject,
      //   text: req.body.message,
      //   html: `<div>${req.body.message}</div>`
      // }
      // await sgMail.send(msg)
      // .then((response) => console.log(response))
      // .catch((err) => console.log(err.message))

      setTimeout(() => {
        client.messages.create({
          body: `*Message From*: ${req.body.name}
*Email*: ${req.body.email}
*Subject*: ${req.body.subject}
*Message:* ${req.body.message}`,
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:+254768879348'
        }).then((message) => console.log(message))
          .done()
      }, 1500)
    }catch(err) {
      console.log(err.message)
    }
  }
}
