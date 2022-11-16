const Router = require('express')
const router = new Router()
const elementsController = require('../controllers/elementsController')

router.get('/ptypes',elementsController.getPTypes)
router.get('/stypes',elementsController.getSTypes)


module.exports = router