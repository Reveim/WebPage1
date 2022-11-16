const { response } = require('express')
const { json } = require('sequelize')
const { Sequelize } = require('../db')
const { Elements,PType, SType } = require('../models/models')
const { Op } = require("sequelize");



class ElementsController {

    async getPTypes(req, res) {
        const ptypes = await Elements.findAll({
            attributes: [
                [Sequelize.literal('distinct ptype'),'ptype']
            ],
            where: {
                statSteamId: { [Op.not]: null }
            }
        })
        return res.json(ptypes)
    }

    async getSTypes(req, res) {
        const stypes = await Elements.findAll({
            attributes: [
                [Sequelize.literal('distinct stype'),'stype']
            ]
        })
        
        return res.json(stypes)
    }

}

module.exports = new ElementsController()