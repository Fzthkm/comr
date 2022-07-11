const express = require('express')
const controller = require('../controllers/organisation')
const router = express.Router()


router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router