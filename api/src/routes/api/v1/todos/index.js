const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Todo list.')
})

module.exports = router
