const { getAllDrinks, mostConsumed, getById } = require('../contollers/drinks')

const Router = require('express').Router()

module.exports.drinksRouter  = ()=>{
    Router.get('/getAll', getAllDrinks())
    Router.get('/mostConsumed', mostConsumed())
    Router.get('/getById', getById())
}
