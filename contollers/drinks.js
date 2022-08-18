const { connection } = require('../utils/database');

module.exports.getAllDrinks = () => {
  return async (req, res) => {
    let query = `SELECT * from drinks`;
    const drinks = connection.query(query, (err, result) => {
      if (err) {
        res.json({ message: 'Failed to retrieve data', err: err.message });

        throw err;
      }
      res.json({ message: 'Retrieved drinks successfully', drinks: result });
    });
  };
};

module.exports.mostConsumed = () => {
  return async (req, res) => {
    let query = `SELECT * from drinks ORDER by ordered desc limit 5`;
    const drinks = connection.query(query, (err) => {
      if (err) throw err;
    });
    res
      .json({ message: 'Retrieved most consumed drinks', drinks: drinks })
      .status(200);
  };
};
module.exports.getById = () => {
  return async (req, res) => {
    let query = `SELECT * from drinks WHERE itemId = ${req.params.itemId};`;
    const drink = connection.query(query, (err, result) => {
      if (err) {
        return res
          .json({ message: 'Failed to retrieve data', err: err.message })
          .status(500);
      }
      if (result.length === 0) {
        return res.json({ message: 'Drink not found' }).status(404);
      }
      res
        .json({ message: 'Retrieved drink successfully', drink: result })
        .status(200);
    });
  };
};
module.exports.getAvailable = () => {
  return async (req, res) => {
    let query = `SELECT * from drinks where available = 1`;
    let getClientLocation = () => {
      connection.query(
        `SELECT location from clients where clientId = ${req.params.clientId}`,
        (err, result) => {
          if (err) {
            return 0;
          }
          console.log(result[0].location)
          return result[0].location;
        },
      );
    };
    connection.query(query, (err, result) => {
      if (err) {
        res
          .json({ message: 'Failed to retrieve data', err: err.message })
          .status(500);
        throw err;
      }
      connection.query(
        `SELECT * FROM cargo where location ='${getClientLocation()}'`,
        (err, cargo) => {
          if (err) {
            throw err
            return res
              .json({ message: 'Failed to retrieve data', err: err.message })
              .status(500);
          }
          console.log(cargo)
          res.json({
            message: 'Retrieved available drinks successfully',
            data: result,
            nearestCargoCompany: cargo,
          });
        },
      );
      console.log(result);
    });
  };
};
