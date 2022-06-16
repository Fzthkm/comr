const Workplace = require('../models/Workplace')


module.exports.create = async (req, res) => {
    const candidate = await Workplace.findOne({name: req.body.name})
    if (!candidate) {
        const workplace = new Workplace({
            name: req.body.name
        })
        await workplace.save().then(() => {
            res.status(201).json(workplace)
        })
    }
    else {
        res.status(404).json({
            message: "Такая организация уже существует"
        })
    }
}

module.exports.update = async (req,res) => {

}

module.exports.getAll = async (req, res) => {
    res.status(200).json(await Workplace.find())
}
