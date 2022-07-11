const Organisation = require('../models/Organisation')


module.exports.create = async (req, res) => {
    try {
        const candidate = await Organisation.findOne({name: req.body.name})
        if (!candidate) {
            const organisation = new Organisation({
                name: req.body.name,
                region: req.body.region
            })
            await organisation.save().then(() => {
                res.status(201).json({organisation})
            })
        } else {
            res.status(302).json({
                message: "Такая организация уже существует"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const organisations = await Organisation.find()
        res.status(200).json(organisations)
    } catch (e) {
        console.log(e)
    }
}

module.exports.getById = async (req, res) => {
    try {
        const organisation = await Organisation.findById(req.params.id)
        if(organisation) {
            res.status(200).json(organisation)
        }
        else {
            res.status(404).json({
                message: "Организация не найдена"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports.update = async (req, res) => {
    try {
        const updated = {
            name: req.body.name,
            region: req.body.region
        }
        await Organisation.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json({
            message: "Обновлено успешно       "
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports.remove = async (req, res) => {
    try {
        await Organisation.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Организация успешно удалена"
        })
    } catch (e) {
        console.log(e)
    }
}

