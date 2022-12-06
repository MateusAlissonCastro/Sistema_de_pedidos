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

//Exibir todos os clientes do banco de dados
const showAllClients = async (req, res) => {
    const clientes = await clienteModel.findAll()
    res.json(clientes)
}

module.exports = {
    syncDB: syncDB,
    showAllClients: showAllClients
}