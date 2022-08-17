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

module.exports.getPaid = ()=>{
    return async (req, res)=>{
        query = `SELECT * from orders where paid = ${true} ;`
    }
}