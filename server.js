const express =require('express');
const  {cargoRouter}  = require('./routes/cargo');
const  {clientRouter}  = require('./routes/client');
const  {drinksRouter}  = require('./routes/drinks');
const  {OrdersRouter}  = require('./routes/orders');
const { connection } = require('./utils/database');
const bodyParser  = require('body-parser')
const app = express()
const cors = require('cors')
require('dotenv').config()

connection.connect((err)=>{
    if (err) throw err;
    console.log('connected')
    })
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use((req,res, next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next()
      })
    clientRouter(app)
    OrdersRouter(app)
    cargoRouter(app)
    drinksRouter(app)
app.get('/home', (req, res)=>{
    res.json({message: 'Welcome to the home page '})
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log('server running on PORT ' + process.env.PORT)
})
