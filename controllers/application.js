const Application = require('../models/Application')

module.exports.create = async (req, res) => {
    try {
        const app = new Application({
            number: req.body.number,
            date: req.body.date,
            patientName: req.body.patientName,
            patientYearOfBirth: req.body.patientYearOfBirth,
            organisation: req.body.organisation,
            diagnosis: req.body.diagnosis,
            COVID: req.body.COVID,
            name: req.body.name,
            position: req.body.position,
            workplace: req.body.workplace,
            additionalInfo: req.body.additionalInfo,
            type: req.body.type,
            consultDate: req.body.consultDate,
            consultType: req.body.consultType,
            description: req.body.description,
            report: req.body.report
        })
        await app.save().then(() => {
            res.status(201).json(app)
        })
    } catch (e) {

    }
}

module.exports.getById = async (req, res) => {
    try {
        const app = Application.findById(req.body.id)
        res.status(200).json(app)
    } catch (e) {
        console.log(e)
    }
}

module.exports.getAll = async (req, res) => {
    const apps = Application.find()
    res.status(200).json({apps})
}

