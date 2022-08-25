const { connection } = require('../utils/database');
module.exports.getAllCargo = () => {
  return async (req, res) => {
    let result = connection.query(`SELECT * from Cargo`, (err, result) => {
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
      `SELECT * from Cargo where companyId = ${req.params.CargoId}`,
      (err, result) => {
        res
          .json({ message: 'Retrieved successfully', Cargo: result })
          .status(200);
        if (err) {
          res.json({ message: 'Internal server Error' });
          throw err;
        }
      },
    );
  };
};

module.exports.getTransported = ()=>{
    return async =(req, res)=>{
        console.log(req.query)
        let query =` SELECT itemId from orders where transporterId = (SELECT companyId from Cargo where companyName = '${req.params.transporter}')
        AND DATE_FORMAT(Added_at,"%Y-%m-%d" ) BETWEEN '${req.query.fromDate}' AND  '${req.query.toDate}'`
        connection.query(query, (err, result)=>{
            if(err){
                res.json({message: 'Error occured while retrieving data'}).status(404)
                throw err
            }
            res.json({message: 'Data retrieved successfully', result: result}).status(200)
        })

        
    }
}
