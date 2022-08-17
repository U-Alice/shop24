const { connection } = require("../utils/database");

module.exports.getAllCargo = ()=>{
    return async(req, res)=>{
        let result = connection.query(`SELECT * from cargo`, (err)=>{
            res.json({message: 'Internal server Error'}).status(500)
            if(err) throw err
        });
        res.json({message: 'Cargo retrieved successfully'}).status(200) 
    }                                                                                                                                                                                                                   ()
}
module.exports.getById = ()=>{
    return async (req, res)=>{
        let result =connection.query(`SELECT * from cargo where cargoId = ${req.params.cargoId}`, (err)=>{
            res.json({message: 'Internal server Error'})
            if(err) throw err 
        })
        res.json({message: 'Retrieved successfully', cargo: result}).status(200)
    }
}