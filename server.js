const express = require('express')
const routes = require('./routes')
const db = require('./src/db')
//require('dotenv').config()

const app = express()
//const dotenv = require('dotenv').config()

app.use(express.json())
app.use(routes)
//console.log(`Banco de dados conectado: ${process.env.DB_NAME}`)
app.listen(3000, () => console.log('O servidor está rodando...'))