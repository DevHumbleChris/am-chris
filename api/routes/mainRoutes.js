const route = require('express').Router()
const mainControllers = require('../controllers/mainControllers')

route.post('/sendMail', mainControllers.sendMail)
route.get('/message', (req, res) => {
  res.json({
    message: 'Checking If Its Working.'
  })
})

module.exports = route
