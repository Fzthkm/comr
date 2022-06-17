const Consultant = require('../models/Consultant')

module.exports.create = async (req, res) => {
    const consultant = new Consultant({
        name: req.body.name,
        position: req.body.position,
        type: req.body.type,
        workplace: req.body.type,
        additionalInfo: req.body.additionalInfo
    })
    await consultant.save().then(() => {
        res.status(201).json(consultant)
    })
}

module.exports.getAll = async (req, res) => {
    const consultants = await Consultant.find()
    res.status(200).json(consultants)
}