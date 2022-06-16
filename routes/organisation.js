const express = require('express')
const controller = require('../controllers/organisation')
const router = express.Router()


router.get('/get', controller.getAll)
router.post('/create', controller.create)

module.exports = router