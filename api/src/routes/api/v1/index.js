const express = require('express')
const todos = require('./todos')

const router = express.Router()

router.use('/todos', todos)

module.exports = router
