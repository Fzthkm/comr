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
            report: req.body.report,
            userId: 1
        })
        await app.save().then(() => {
            res.status(201).json(app)
        })
    } catch (e) {

    }
}

module.exports.getById = async (req, res) => {
    try {
        const app = await Application.findById(req.params.id)
        res.status(200).json(app)
    } catch (e) {
        console.log(e)
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const apps = await Application.find()
        res.status(200).json(apps)
    } catch (e) {
        console.log(e)
    }
}

module.exports.update = async (req, res) => {
    try {
        const app = await Application.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        )
        res.status(200).json({
            message: "Обновлено"
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports.remove = async (req, res) => {
    try {
        await Application.findByIdAndRemove(req.params.id)
        res.status(200).json({
            message: "Заявка была удалена"
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports.getLastId = async (req, res) => {
    try {
        const app = await Application.find().sort({_id: -1}).limit(1)
        res.status(200).json(app[0])
    } catch (e) {
        console.log(e)
    }
}