let mysql = require('mysql');

module.exports.connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    port: '3306',
    password: '', 
    database: 'shop24'
})


