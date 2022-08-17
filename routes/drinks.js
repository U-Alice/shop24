const { getAllDrinks, mostConsumed, getById } = require('../contollers/drinks')

module.exports.drinksRouter = require('express').Router

drinksRouter.get('/getAll', getAllDrinks())
drinksRouter.get('/mostConsumed', mostConsumed())
drinksRouter.get('/getById', getById())
