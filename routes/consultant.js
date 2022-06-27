const express = require('express')
const controller = require('../controllers/consultant')
const router = express.Router()


router.post('/create', controller.create)
router.get('/get', controller.getAll)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router