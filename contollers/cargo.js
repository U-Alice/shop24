const { connection } = require('../utils/database');
module.exports.getAllCargo = () => {
  return async (req, res) => {
    let result = connection.query(`SELECT * from cargo`, (err, result) => {
      if (err) {
        res
          .json({ message: 'Internal server Error', err: err.message })
          .status(500);
        throw err;
      }

      res
        .json({ message: 'Cargo retrieved successfully', result: result })
        .status(200);
    });
  };
};
module.exports.getById = () => {
  return async (req, res) => {
    let result = connection.query(
      `SELECT * from cargo where companyId = ${req.params.cargoId}`,
      (err, result) => {
        res
          .json({ message: 'Retrieved successfully', cargo: result })
          .status(200);
        if (err) {
          res.json({ message: 'Internal server Error' });
          throw err;
        }
      },
    );
  };
};
