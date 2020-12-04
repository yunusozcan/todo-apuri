const mongoose = require('mongoose')
const todoSchema = require('./todos.model')

todoSchema.statics = {
    create: function (data, cb) {
        const todo = new this(data)
        todo.save(cb)
    },

    get: function (query, cb) {
        this.find(query, cb)
    },

    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb)
    },

    remove: function (query, cb) {
        this.deleteOne(query, cb)
    }
}

const todoModel = mongoose.model('Todo', todoSchema)

module.exports = todoModel
