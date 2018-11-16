// Set up MySQL connection.
var mysql = require('mysql');
var connection;


// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password:'',
//         database: ''

//     });
// }


connection.connect();
module.exports = connection;