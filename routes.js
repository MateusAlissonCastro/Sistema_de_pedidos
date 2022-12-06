const express = require('express')
const router = express.Router()
const clientes = require('./src/controllers/clientes')

router.get('/', (req, res) => {
    res.send('Hello World and ' + req.body.name)
})

router.get('/sincronizar', (req, res) => {
    clientes.syncDB()
    res.send('Tudo ok!')
})

router.get('/clientes', clientes.showAllClients)

module.exports = router 