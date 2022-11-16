
module.exports = function (string) {
    var weapons = ["knife", "hegrenade", "glock", "deagle", "elite", "fiveseven", "xm1014", "mac10", "ump45", "p90", "awp", "ak47", "aug", "famas", "g3sg1", "m249", "enemy_weapon", "hkp2000", "p250", "sg556", "scar20", "ssg08", "mp7", "mp9", "nova", "negev", "sawedoff", "bizon", "tec9", "mag7", "m4a1", "galilar", "molotov", "decoy", "taser",]
    var maps = ["cs_assault", "cs_italy", "cs_office", "de_aztec", "de_cbble", "de_dust2", "de_dust", "de_inferno", "de_nuke", "de_train", "de_sugarcane", "de_vertigo", "ar_baggage", "de_safehouse", "ar_monastery", "de_stmarc", "de_lake", "cs_militia", "de_bank", "ar_shoots", "de_vertigo", "de_lake", "de_shorttrain", "de_house","train","shoots","baggage","lake","sugarcane","safehouse","stmarc","bank"]
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let res;
    var wh = true

    for (var i = 0; wh; i++) {
        if (string[0].includes(alphabet[i])) {
            wh = false
            res = ["achievements", " "]
            return res
        }
        else if (string.includes(maps[i])) {
            wh = false
            res = ["map", maps[i].toString()]
            return res
        }
        else if (string.includes(weapons[i])) {
            wh = false
            res = ["weapon", weapons[i].toString()]
            return res
        }
        else if (i == 35) {
            res = ["general", ""]
            wh = false
            return res
        }
    }

}
            
        
