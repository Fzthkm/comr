const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')


module.exports.login = async (req, res) => {
    try {
        const candidate = await User.findOne({login: req.body.login})
        if (candidate) {
            const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
            if (passwordResult) {
                const token = jwt.sign({
                    login: candidate.login,
                    userId: candidate._id,
                    rules: candidate.rule
                }, 'comr', {expiresIn: 24 * 60 * 60})
                res.status(200).json({
                    token: `Bearer ${token}`
                })
            } else {
                res.status(401).json({
                    message: "Неверный пароль"
                })
            }
        } else {
            res.status(404).json({
                message: "Неверный логин"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports.register = async (req, res) => {
    try {
        if (await User.findOne({login: req.body.login})) {
            res.status(409).json({
                message: 'Login уже занят'
            });
        } else {
            const user = new User({
                login: req.body.login,
                password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
                name: req.body.name,
            });
            await user.save().then(() => console.log('User created'));
            res.status(201).json(user);
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports.changePassword = async (req, res) => {
    try {

    } catch (e) {
        console.log(e)
    }
}