const express =require('express');
const { clientRouter } = require('./routes/client');
const { drinksRouter } = require('./routes/drinks');
const { connection } = require('./utils/database');
const app = express()
require('dotenv').config()

connection.connect((err)=>{
    if (err) throw err;
    console.log('connected')
    })
app.use('/clients', clientRouter)
app.use('/DrinksRouter', drinksRouter)

app.listen(process.env.PORT || 5000, ()=>{
    console.log('server running on PORT ' + process.env.PORT)
})
