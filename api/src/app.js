const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./db')
db()

const routes = require('./routes')
const app = express()

app.use(bodyParser.json())
app.use(compression())
app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))

app.use('/', routes)

module.exports = app
