const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workplaceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String
    }
})

module.exports = mongoose.model('workplaces', workplaceSchema)