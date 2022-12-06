const { Sequelize, DataTypes } = require('sequelize')
const dotenv = require('dotenv').config()

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbHost = process.env.DB_HOST
const dbPassword = process.env.DB_PASSWORD

const sequelize = new Sequelize(dbName, dbUser, dbPassword,
    {
        host: dbHost,
        dialect: "mysql"
    }
)

sequelize.authenticate().then(() => {
    console.log('Banco de dados conectado com sucesso')
})
    .catch((err) => {
        console.log('ERRO ' + err)
    })

module.exports = {
    Sequelize: Sequelize,
    DataTypes: DataTypes,
    sequelize: sequelize,
    dotenv: dotenv
}