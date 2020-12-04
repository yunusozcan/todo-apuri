const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true
        },
        deadline: {
            type: Date,
            required: false
        }
    },
    {timestamps: true}
)

module.exports = todoSchema
