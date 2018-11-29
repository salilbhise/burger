var mysql = require('mysql');
require('dotenv').config()
var connection;

if (process.env.JAWSDB_URL) {
        connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        port: 3306,
        password: process.env.PASSWORD,
        database: process.env.DATA_BASE
    });
}else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'password',
        database: 'burgers_db'

    });
}

connection.connect(function(err){
    if(err) console.log(err);
    console.log("connected")
});
module.exports = connection;