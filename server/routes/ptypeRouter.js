const Router = require('express')
const router = new Router()
const elementsController = require('../controllers/elementsController')

router.get('/',elementsController.getPTypes)


module.exports = router