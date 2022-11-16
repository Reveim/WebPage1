const Router = require('express')
const router = new Router()
const elementsController = require('../controllers/elementsController')

router.get('/',elementsController.getSTypes)


module.exports = router