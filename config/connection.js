var mysql = require('mysql');
require('dotenv').config()
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
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