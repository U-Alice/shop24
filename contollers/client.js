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
      let qry = `SELECT * from clients where clientId =${req.params.clientId} `;
      let result = connection.query(qry, (err, result, fields) => {
        res.json({message: 'client retrieval successfull', client: result}).status(200)
      });
    }catch(err){
      console.log(err)
    }
  };
};
module.exports.getTransporter = ()=>{
  return async (req, res)=>{
    let qry = `SELECT * from Cargo WHERE location = (SELECT location from clients where clientId = ${req.params.clientId})`
    connection.query(qry, (err, result)=>{
      if(err){
        res.json({message: 'Failed to load data'}.status(404))
      }
      res.json({message: 'Loaded data successfully' , data: result}).status(200)
    })
  }
}


