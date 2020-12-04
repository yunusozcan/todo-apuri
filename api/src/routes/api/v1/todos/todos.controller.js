const Todos = require('./todos.dao')

exports.createTodo = function (req, res, next) {
    const todo = {
        id: req.body.id,
        text: req.body.text,
        completed: req.body.completed,
        deadline: req.body.deadline
    }

    Todos.create(todo, function (err) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: 'Todo created successfully'
        })
    })
}

exports.getTodos = (req, res, next) => {
    Todos.get({}, (err, todos) => {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json(todos)
    })
}

exports.updateTodo = function (req, res, next) {
    Todos.update({id: req.body.id}, req.body, function (err, todo) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: 'Todo updated successfully'
        })
    })
}

exports.removeTodo = function (req, res, next) {
    Todos.remove({id: req.body.id}, function (err, todo) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: 'Todo deleted successfully'
        })
    })
}
