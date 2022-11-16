const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const statsRouter = require('./statsRouter')
const achievementsRouter = require('./achievementsRouter')
const elementsRouter = require('./elementsRouter')

router.use('/user', userRouter)
router.use('/stats', statsRouter)
router.use('/achievements', achievementsRouter)
router.use('/elements', elementsRouter)


module.exports = router