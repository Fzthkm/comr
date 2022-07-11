const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orgSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    region: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('organisations', orgSchema)