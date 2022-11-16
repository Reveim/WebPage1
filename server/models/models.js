const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    steam_id: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Stats = sequelize.define('stats', {
    steam_id: { type: DataTypes.STRING, primaryKey: true },
})

const Achievements = sequelize.define('achievements', {
    steam_id: { type: DataTypes.STRING, primaryKey: true },
})

const Elements = sequelize.define('element', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    value: { type: DataTypes.INTEGER, defaultValue: 0 },
    ptype: { type: DataTypes.STRING, allowNull: true },
    stype: { type: DataTypes.STRING, allowNull: true }
})


User.hasOne(Stats)
Stats.belongsTo(User)

User.hasOne(Achievements)
Achievements.belongsTo(User)

Stats.hasMany(Elements)
Elements.belongsTo(Stats)

Achievements.hasMany(Elements)
Elements.belongsTo(Achievements)

module.exports = {
    User,
    Stats,
    Achievements,
    Elements,
}