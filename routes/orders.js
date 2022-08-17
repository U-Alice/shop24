const { getPaidOrders, completeOrder, createOrder } = require('../contollers/order')

module.exports.OrdersRouter = require('express').Router

OrdersRouter.get('/paidOrders/topTen' , getPaidOrders())
OrdersRouter.post('/getAll/get', completeOrder())
OrdersRouter.post('/createOrder', createOrder())

