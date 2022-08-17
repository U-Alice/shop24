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
        let query = `SELECT * from drinks order desc limit 5`;
        const drinks = connection.query(query, (err)=>{
            if (err) throw err
        })
        res.json({message: 'Retrieved most consumed drinks', drinks: drinks}).status(200)

    }
}
module.exports.getById = ()=>{
    return async (req, res)=>{
        let query = `SELECT * from drinks WHERE id = ${req.params.id};`
        const drink = connection.query(query, (err)=>{
            if (err) throw err;
        res.json({message: 'Retrieved drink successfully', drink: drink})
    })
    }
}