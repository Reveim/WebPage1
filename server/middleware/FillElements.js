const { Elements, SType, PType } = require('../models/models')
const stack = require('../middleware/Stacks');

module.exports = function (steam_id) {
    var string = '', statistics = '', achievements = ''
    //const elem =  Elements.build()
    fetch('https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=C74506EF2E4C04DA819A5DC0599C63D2&steamid=' + `${steam_id}` + 'sta&appid=730&format=JSON')
        .then(response => {
            return response.text()
        })
        .then(function (data) {
            if (data.length > 2) {
                string = data.replace(/[^\w]/g, '').replace(/.{10,100}(?=stats)/gm, '').substring(5).split(['achievements'])
                //string = string.replace(/.{10,100}(?=stats)/gm, ''), //string = string.substring(5), //string = string.split(['achievements'])
                statistics = string[0].replace(/(?:name)/gm, ' ').replace(/(?:value)/gm, ' ').split([' '])
                statistics.forEach(async function (element, index) {
                    if (index != 0 && index % 2 != 0 && !statistics[index].includes('GI')) {
                        if (!await Elements.findOne({ where: { statSteamId: steam_id, } })) {
                            Elements.create({
                                statSteamId: steam_id,
                                name: element.toString(),
                                value: parseInt(statistics[index + 1], 10),
                                ptype: (stack(element))[0].toString(),
                                stype: (stack(element))[1].toString()

                            })
                        }
                        Elements.update({
                            value: parseInt(statistics[index + 1], 10),
                            ptype: (stack(element))[0].toString(),
                            stype: (stack(element))[1].toString()
                        },
                        {
                            where:
                            {
                                statSteamId: steam_id , name: element.toString()
                            }
                        }
                    )
                    }
                });
                achievements = string[1].replace(/(?:name)/gm, ' ').replace(/(?:achieved)/gm, ' ').split([' '])
                achievements.forEach(async function (element, index) {
                    if (index != 0 && index % 2 != 0 && !achievements[index].includes('GI')) {
                        if (!await Elements.findOne({ where: { achievementSteamId: steam_id, } })) {
                            Elements.create({
                                achievementSteamId: steam_id,
                                name: element.toString(),
                                value: parseInt(achievements[index + 1], 10),
                                ptype: (stack(element))[0].toString(),
                                stype: (stack(element))[1].toString()
                            })
                        }
                        Elements.update({
                            value: parseInt(achievements[index + 1], 10),
                            ptype: (stack(element))[0].toString(),
                            stype: (stack(element))[1].toString()
                        },
                            {
                                where:
                                {
                                    achievementSteamId: steam_id , name: element.toString()
                                }
                            }
                        )
                    }
                });
            }
        })
        .catch(err => console.log(err))
}