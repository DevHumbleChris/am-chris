const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mainRoutes = require('./routes/mainRoutes')

const app = express()

// Middlewares.
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(mainRoutes)

module.exports = {
  path: '/api',
  handler: app
}
