var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'Your User',
	password: 'Your Password',
	database: 'Bamazon'
});

connection.connect(function(err) {

	if (err) throw err;
});

module.exports = connection;
