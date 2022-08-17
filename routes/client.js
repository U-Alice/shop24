const { Router } = require('express')
const { getClients, getClientById } = require('../contollers/client')

module.exports.clientRouter = require('express').Router()

Router.get('/getClients', getClients())
Router.get('/getById',getClientById() )
// Router.post('/')
