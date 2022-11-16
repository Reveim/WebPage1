const Router = require('express')
const router = new Router()
const statsController = require('../controllers/statsController')


router.get('/',statsController.getAll)

module.exports = router