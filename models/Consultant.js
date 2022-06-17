const mongoose = require('mongoose')
const Schema = mongoose.Schema

const consultantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String
    },
    additionalInfo: {
        type: String
    },
    type: {
        type: String
    },
    workplace: {
        type: String
    }
})

module.exports = mongoose.model('consultants', consultantSchema)