const { User, Stats, Achievements } = require('../models/models');
const ApiErorr = require('../error/ApiError');
const bcrypt = require('bcrypt');
const FillElements = require('../middleware/FillElements');
const jwt = require('jsonwebtoken')

const generateJwt = (id, steam_id) => {
    return jwt.sign(
        { id, steam_id },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async login(req, res, next) {
        try {
            var token
            var user
            const { steam_id } = req.body
            if (steam_id.length == 17) {
                if (!await User.findOne({ where: { steam_id: steam_id } })) {
                    user = await User.create({ steam_id: steam_id })
                    const stat = await Stats.create({ userId: user.id, steam_id: steam_id })
                    const ach = await Achievements.create({ userId: user.id, steam_id: steam_id })
                    token = generateJwt(user.id, steam_id.toString())
                }
                user = await User.findOne({ where: { steam_id: steam_id } })
                FillElements(steam_id)
                token = generateJwt(user.id, steam_id)
                return res.json({ token })
            }
            return next(ApiError.internal('Invalid Steam Id'))
        } catch (e) {
            next(ApiErorr.badRequest(e.message))
        }
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.steam_id)
        return res.json({token})
    }
}

module.exports = new UserController()