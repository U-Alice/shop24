const { v4 } = require('uuid');
const { connection } = require('../utils/database');

module.exports.createOrder = () => {
  return async (req, res) => {
    let transporterID = connection.query(
      `SELECT Id where cargoName = ${req.body.cargoName} `,
    );
    let itemsArray = req.body.items;
    itemsArray.map((item) => {
      let itemId = `SELECT Id where itemName = ${item}`;
      let query = `INSERT INTO orders (ID, clientId,contentId, quantity,transporterID) values(${v4()},  ${
        req.body.userId
      },${itemId},${req.body.quantity}, ${transporterID});`;
      connection.query(query, (err) => {
        if (err) throw err;
      });
      res.json({ message: 'Order created successfully' });
    });
  };
};

module.exports.getPaidOrders = ()=>{
    return async (req, res)=>{
        let query = `SELECT * from orders where paid = ${true} limit 10;`
        const result = connection.query(query, (err)=>{
            res.json({message: 'Internal server Error'}).status(500)
            if(err) throw err
        })
        res.json({message: 'Successfully retrieved paid orders', orders: result}).status(200)
    }
}

module.exports.getTopfive = ()=>{
    return async (req, res)=>{
    let query = `SELECT * from orders `
    }
}
module.exports.completeOrder = ()=>{
    return async (req, res)=>{
        let query = `UPDATE order SET completed = ${true} where orderId = ${req.params.orderId};`
        const result = connection.query(query, (err)=>{
            if(err) throw err
        })
        res.json({message: 'Order completed'})
    }
}