//const { Sequelize, DataType } = require('sequelize')
const db = require('../db')
const sequelize = db.sequelize

const Cliente = db.sequelize.define('Cliente', {
    id: {
        type: db.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: db.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: db.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize
}
)

module.exports = Cliente