const { getClients, getClientById } = require('../contollers/client')


const Router = require('express').Router()
module.exports.clientRouter = (app)=>{
        Router.get('/getClients', getClients())
        Router.get('/getById/:clientId',getClientById())
    app.use('/clients',Router)
}
// Router.post('/')
