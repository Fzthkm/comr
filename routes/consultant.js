const express = require('express')
const controller = require('../controllers/consultant')
const router = express.Router()


router.post('/create', controller.create)
router.get('/get', controller.getAll)

module.exports = router