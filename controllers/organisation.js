const Organisation = require('../models/Organisation')


module.exports.create = async (req, res) => {
    try {
        const candidate = await Organisation.findOne({name: req.body.name})
        if (!candidate) {
            const organisation = new Organisation({
                name: req.body.name
            })
            await organisation.save().then(() => {
                res.status(200).json({organisation})
            })
        } else {
            res.status(404).json({
                message: "Такая организация уже существует"
            })
        }
    } catch (e) {

    }
}

module.exports.getAll = async (req, res) => {
    try {
        const organisations = await Organisation.find()
        res.status(200).json(organisations)
    } catch (e) {

    }
}
