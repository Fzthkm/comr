const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appSchema = new Schema({
    number: {
        type: Number
    },
    date: {
        type: String
    },
    organisation: {
        type: String
    },
    COVID: {
        type: Boolean,
        default: false
    },
    patientName: {
        type: String
    },
    patientYearOfBirth: {
        type: String
    },
    diagnosis: {
        type: String
    },
    name: {
        type: String
    },
    position: {
        type: String
    },
    workplace: {
        type: String
    },
    additionalInfo: {
        type: String
    },
    type: {
        type: String
    },
    consultDate: {
        type: String
    },
    consultType: {
        type: String
    },
    description: {
        type: String
    },
    report: {
        type: String
    },
    userId: {
        type: String
    }
})

module.exports = mongoose.model('applications', appSchema)