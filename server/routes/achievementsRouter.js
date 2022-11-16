const Router = require('express')
const router = new Router()
const achievementsController = require('../controllers/achievementsController')



router.get('/',achievementsController.getAll)

module.exports = router