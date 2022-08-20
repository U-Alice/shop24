const { getAllCargo, getById, getTransported } = require('../contollers/cargo');
const Router = require('express').Router();
module.exports.cargoRouter = (app) => {
  Router.get('/getAll', getAllCargo());
  Router.get('/getById/:cargoId', getById());
  Router.get('/getTransported/:transporter', getTransported());
  
  app.use('/cargo',Router)
};
