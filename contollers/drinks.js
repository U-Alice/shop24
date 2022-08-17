const { connection } = require("../utils/database")

module.export.getAllDrinks = ()=>{
    return async (req, res)=>{
        let query = `SELECT * from drinks`
        const drinks = connection.query(query, (err)=>{
            if(err) throw err
        });
        res.json({message: 'Retrieved drinks successfully', drinks: result})
    }
}

module.exports.mostConsumed  = ()=>{
    return async (req, res)=>{
        let query = `SELECT * from drinks order desc`
    }
}