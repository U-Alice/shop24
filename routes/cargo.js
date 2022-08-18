const { getAllCargo, getById } = require('../contollers/cargo');
const Router = require('express').Router();
module.exports.cargoRouter = (app) => {
  Router.get('/getAll', getAllCargo());
  Router.get('/getById/:cargoId', getById());
  app.use('/cargo',Router)
};
