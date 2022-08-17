const { getAllCargo, getById } = require('../contollers/cargo')

module.exports.cargoRouter = require('express').Router()
cargoRouter.get('getAll', getAllCargo())
cargoRouter.get('/getById', getById())
