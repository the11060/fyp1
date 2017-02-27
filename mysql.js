// Load MySQl module
var mysql = require('mysql');

// Set Connection
var connection = mysql.createConnection({
	host: us-cdbr-iron-east-04.cleardb.net, 
	user: b209bffd51f64c, 
	password: 49d2edf1, 
	database: heroku_223856f90647394
});

// Start connection
connection.connect();

// Query
connnection.query('SELECT 1 + 1 AS solution', function(error, rows, fields) {
	// Check if there are errors
	if (error) {
		throw error;
	}
	console.log(rows[0].solution);
});

// Close connection
connection.end();
