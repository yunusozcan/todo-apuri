const express = require('express')
const router = express.Router()
const Todos = require('./todos.controller')

router.get('/', Todos.getTodos)
router.post('/create', Todos.createTodo)
router.put('/update', Todos.updateTodo)
router.delete('/remove', Todos.removeTodo)

module.exports = router
