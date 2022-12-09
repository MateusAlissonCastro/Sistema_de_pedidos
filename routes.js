const express = require('express')
const router = express.Router()
const clientes = require('./src/controllers/clientes')

router.get('/', (req, res) => {
    res.send('Hello World and ' + req.body.name)
})

router.post('/sincronizar', (req, res) => {
    clientes.syncDB()
    res.send('Tudo ok!')
})

router.get('/all', clientes.showAllClients)
router.post('/add', clientes.createClient)
router.get('/user/:id', clientes.findClient)
router.put('/user/:id', clientes.updateClient)
router.delete('/user/:id', clientes.deleteClient)

module.exports = router 