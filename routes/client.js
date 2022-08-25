const { getClients, getClientById, getTransporter } = require('../contollers/client')


const Router = require('express').Router()
module.exports.clientRouter = (app)=>{
        Router.get('/getClients', getClients())
        Router.get('/getById/:clientId',getClientById())
        Router.get('/getTransporter/:clientId',getTransporter())
    app.use('/clients',Router)
}
// Router.post('/')
