const { getPaidOrders, completeOrder, createOrder } = require('../contollers/order')

const Router = require('express').Router()
module.exports.OrdersRouter = (app)=>{
    Router.get('/paidOrders/topTen' , getPaidOrders())
    Router.post('/completeOrder/:orderId', completeOrder())
    Router.post('/createOrder/:clientId', createOrder())
    app.use('/orders', Router)
}

