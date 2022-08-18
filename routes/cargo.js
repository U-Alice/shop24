const { getAllCargo, getById } = require('../contollers/cargo');
const Router = require('express').Router();
module.exports.cargoRouter = () => {
  Router.get('getAll', getAllCargo());
  Router.get('/getById', getById());
};
