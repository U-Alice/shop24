const { getAllDrinks, mostConsumed, getById, getAvailable } = require('../contollers/drinks')

const Router = require('express').Router()

module.exports.drinksRouter  = (app)=>{
    Router.get('/getAll', getAllDrinks())
    Router.get('/mostConsumed', mostConsumed())
    Router.get('/getById/:itemId', getById())
    Router.get('/available/:clientId',getAvailable())
    app.use('/drinks', Router)
}
