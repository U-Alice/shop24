const { connection }  =  require('../utils/database');

module.exports.getClients = () => {
  return async (req, res) => {
    try{

      let qry = 'SELECT *  from clients;';
      let result = connection.query(qry, (err, result)=>{
        if(err) throw err
        console.log(result)
        res.json({message: 'Fetched clients data successfully', result : result}).status(200)
      })
    }catch(err){
      res.json({message: 'Internal Server Error'})
      console.log("err" , err)
    }
  };
};
module.exports.getClientById = () => {
  return async (req, res) => {
    try{
      let qry = `SELECT * from clients where Id =${req.params.clientId} `;
      let result = connection.query(qry, (err, result, fields) => {
        res.json({message: 'client retrieval successfull', client: result}).status(200)
      });
    }catch(err){
      console.log(err)
    }
  };
};


