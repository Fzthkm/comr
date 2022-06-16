const Application = require('../models/Application')

module.exports.create = async (req, res) => {
    const app = new Application({
        number: req.body.number,
        date: req.body.date,
        patient: req.body.patient,
        organisation: req.body.organisation,
        diagnosis: req.body.diagnosis,
        COVID: req.body.COVID,
        consult: req.body.consult,
        user: req.body.user,
        description: req.body.description,
        report: req.body.report,
        canceled: req.body.canceled
    })
    await app.save().then(() => res.status(200).json(app))
}

module.exports.getById = async (req, res) => {
    const app = Application.findById(req.body.id)
    res.status(200).json(app)
}

module.exports.getAll = async (req, res) => {

}

