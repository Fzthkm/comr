const express = require('express')
const controller = require('../controllers/application')
const router = express.Router()


router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/last', controller.getLastId)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router