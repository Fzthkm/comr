const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rules: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('users', userSchema)