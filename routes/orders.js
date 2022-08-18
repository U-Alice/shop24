const { getPaidOrders, completeOrder, createOrder } = require('../contollers/order')

const Router = require('express').Router()
module.exports.OrdersRouter = ()=>{
    Router.get('/paidOrders/topTen' , getPaidOrders())
    Router.post('/getAll/get', completeOrder())
    Router.post('/createOrder', createOrder())
}

