const { Stats, Elements } = require('../models/models')
const ApiErorr = require('../error/ApiError')


class StatsController {

  async getAll(req, res, next) {
    try{
      let {steam_id, ptype, stype, limit, page} = req.query
      page = page || 1
      limit = limit || 500
      let offset = page * limit - limit
      let elements
      if (!ptype && !stype) {
        elements = await Elements.findAndCountAll({ where: { statSteamId: steam_id} , limit, offset})
      }
      if (ptype && !stype) {
        elements = await Elements.findAndCountAll({ where: { ptype, statSteamId: steam_id} , limit, offset})
      }
      if (ptype && stype) {
        elements = await Elements.findAndCountAll({ where: { ptype, stype, statSteamId: steam_id } , limit, offset})
      }
      return res.json(elements)
    }catch(e){
      next(ApiErorr.badRequest(e.message))
    }
  }

  // async getOne(req, res) {
  //     const{id} = req.params
  //     const stat = await Stats.findOne (
  //       {
  //       where: {id},
  //       include: [{model: Elements}]

  //       },
  //     )
  //     return res.json(stat)
  // }

}

module.exports = new StatsController()