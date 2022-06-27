const Consultant = require('../models/Consultant')

module.exports.create = async (req, res) => {
    try {
        const consultant = new Consultant({
            name: req.body.name,
            position: req.body.position,
            type: req.body.type,
            workplace: req.body.workplace,
            additionalInfo: req.body.additionalInfo
        })
        await consultant.save().then(() => {
            res.status(201).json(consultant)
        })
    } catch (e) {

    }
}

module.exports.getAll = async (req, res) => {
    try {
        const consultants = await Consultant.find()
        res.status(200).json(consultants)
    } catch (e) {

    }
}
module.exports.getByName = async (req, res) => {
    try {
        const consultant = await Consultant.find({name: req.params.name})
        if(consultant)
        {
            res.status(200).json(consultant)
        }
        else {
            res.status(404).json({
                message: `Консультант с таким именем (${req.params.name}) не найден`
            })
        }
    } catch (e) {

    }
}


module.exports.getById = async (req, res) => {
    try {
        const consultants = await Consultant.findById(req.params.id)
        res.status(200).json(consultants)
    } catch (e) {

    }
}

module.exports.update = async (req, res) => {
    try {
        const consultant = await Consultant.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true})
        res.status(200).json({
            message: `Consultant: ${consultant} has been updated.`
        })
    } catch (e) {

    }
}

module.exports.remove = async (req, res) => {
    try {
        await Consultant.remove({_id: req.params.id})
        res.status(200).json({
            message: 'Consultant has been removed.'
        })
    } catch (e) {

    }
}