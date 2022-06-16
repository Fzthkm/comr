const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    organisation: {
        ref: 'organisations',
        type: Schema.Types.ObjectId
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
        required: true
    },
    COVID: {
        type: Boolean
    },
    patient: {
        type: Object
    },
    diagnosis: {
        type: String
    },
    consult: {
        name: {
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
        }
    },
    description: {
        type: String
    },
    report: {
        type: String
    },
    canceled: {
        type: Boolean
    }
})

module.exports = mongoose.model('applications', appSchema)