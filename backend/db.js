const mongoose = require("mongoose")

mongoose.connect("")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    comppleted: Boolean
})


const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}