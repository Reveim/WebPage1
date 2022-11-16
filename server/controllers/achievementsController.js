const { Achievements, Elements } = require("../models/models")
const ApiErorr = require('../error/ApiError');

class AchievementController {

    async getAll(req, res, next) {
        try {
            let { steam_id } = req.query
            const elements = await Elements.findAll({ where: { achievementSteamId: steam_id } })
            return res.json(elements)
        } catch (e) {
            next(ApiErorr.badRequest(e.message))
        }
    }
}

module.exports = new AchievementController()