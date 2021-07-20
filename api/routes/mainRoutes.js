const route = require('express').Router()
const mainControllers = require('../controllers/mainControllers')

route.post('/sendMail', mainControllers.sendMail)

module.exports = route
