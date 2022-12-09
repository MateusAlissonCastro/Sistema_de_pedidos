//const Cliente = require('../models/clientesModel')
const clienteModel = require('../models/clientesModel')

//Sincronizar banco de dados
const syncDB = async () => {
    try {
        await clienteModel.sync({ force: true })
        console.log('Banco de Dados sincronizado com sucesso!')
    }
    catch (err) {
        console.log('ERRO : ' + err)
    }

}

//Exibir todos os clientes
const showAllClients = async (req, res) => {
    const clientes = await clienteModel.findAll()
    res.json(clientes)
}
//Adiciona um cliente
const createClient = async (req, res) => {
    await clienteModel.create({
        nome: req.body.nome,
        email: req.body.email
    })
    res.send('Cliente criado com sucesso!')
}
//Busca um cliente
const findClient = async (req, res) => {
    const idClient = req.params.id
    const client = await clienteModel.findByPk(idClient)
    res.json(client)
}
//Atualiza um cliente
const updateClient = async (req, res) => {
    const idClient = req.params.id
    await clienteModel.update({
        nome: req.body.nome,
        email: req.body.email
    }, {
        where: {
            id: idClient
        }
    })
    res.send('Cliente atualizado com sucesso!')
}

//Deleta um cleinte
const deleteClient = async (req, res) => {
    const idClient = req.params.id
    await clienteModel.destroy({
        where: {
            id: idClient
        }
    })
    res.send('Cliente apagado com sucesso!')
}

module.exports = {
    syncDB: syncDB,
    showAllClients: showAllClients,
    createClient: createClient,
    findClient: findClient,
    updateClient: updateClient,
    deleteClient: deleteClient
}