var express = require("express");
require('dotenv').config()
var mysql = require('mysql');
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password:'',
//         database: ''

//     });
// }
console.log(process.env.HOST, "this should be the host");

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    port: 3306,
    password: process.env.PASSWORD,
    database: process.env.DATA_BASE
});


connection.connect(function(err){
    if (err) throw err;

    console.log('Connected');
});

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
