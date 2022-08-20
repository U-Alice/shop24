const { v4 } = require('uuid');
const { connection } = require('../utils/database');

module.exports.createOrder = () => {
  return async (req, res) => {
    try {
      let transporterID;
      connection.query(
        `SELECT companyId from  cargo where name = '${req.body.transporterName}' `,
        (err, result) => {
          if (err) throw err;
          console.log(result)
          transporterID = result[0].companyId;
        },
      );
      let itemsArray = req.body.items;
      itemsArray.map((item) => {
        let itemId = `SELECT itemId from drinks where itemName = '${item}'`;
        connection.query(itemId, (err, result) => {
          if (err) throw err;
          connection.query(
            `INSERT INTO orders (orderId, clientId,itemID, quantity,transporterID) values('2',  ${req.params.clientId},${result[0].itemId},${req.body.quantity}, ${transporterID});`,
            (err, result) => {
              if (err) throw err;
              console.log(result);
              res.json({ message: 'Order created successfully', result });
            },
          );
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
};

module.exports.getPaidOrders = () => {
  return async (req, res) => {
    let query = `SELECT clients.firstName, orders.orderId, cargo.name, cargo.location  from orders INNER JOIN clients ON clients.clientId = orders.clientId Inner JOIN cargo ON cargo.companyId = orders.transporterId WHERE paid = 1  limit 10`;
    const result = connection.query(query, (err, result) => {
      if (err) throw err;
      console.log(result)
      return res
      .json({ message: 'Successfully retrieved paid orders', orders: result })
      .status(200);
    });
  };
};

module.exports.getTopfive = () => {
  return async (req, res) => {
    let query = `SELECT * from orders `;
  };
};

module.exports.completeOrder = () => {
  return async (req, res) => {
    let query = `UPDATE orders SET completed = 1 where orderId = ${
      req.params.orderId
    };`;
    const result = connection.query(query, (err) => {
      if (err) throw err;
      res.json({ message: 'Order completed' });
    });
  };
};
