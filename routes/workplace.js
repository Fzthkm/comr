const express = require('express')
const controller = require('../controllers/workplace')
const router = express.Router()


router.post('/create', controller.create)
router.get('/getAll', controller.getAll)

module.exports = router