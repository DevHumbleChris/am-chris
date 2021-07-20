require('dotenv/config')
const sgMail = require('@sendgrid/mail')
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
module.exports = {
  sendMail: async (req, res) => {
    try {
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
