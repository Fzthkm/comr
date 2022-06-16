const express = require('express')
const controller = require('../controllers/application')
const router = express.Router()


router.post('/create', controller.create)
router.get('/list', controller.getAll)
router.get('/:id', controller.getById)

module.exports = router