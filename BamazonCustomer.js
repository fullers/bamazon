// Require MySQL, Prompt, CLI-Table
var mysql = require('mysql');

var inquirer = require('inquirer');

var Table = require('cli-table2');

// Require Connect.js
 var connect = require('./connect.js');
 var connection = connect;

// Starts the application
display();

// Function that displays the product table.
function display() {

	connection.query('SELECT * FROM Products', function(err, results){
		
		var table = new Table({
			head: ['ID', 'Product Name', 'Price'],
		   	//colWidths: [20, 200, 50]
		});

		for (var i=0; i <results.length; i++) {
			table.push(

				[results[i].id, results[i].ProductName, '$'+results[i].Price]
				
			);
			
		}
		console.log(table.toString());
		customerPrompt();
	});

}

// Function to update the datbase when the customer inputs the quantity and there is enough in stock.

function updateDB(id, quantity) {
    
    var sel_query = 'SELECT StockQuantity FROM Products WHERE ?';
	var update_query = 'UPDATE Products SET ? WHERE ?';

	connection.query(sel_query, {id: id}, function(err, res){
		 for (var i = 0; i < res.length; i++) { 
		 	var newQuantity = res[i].StockQuantity - quantity;
		    //console.log("New Quantity: "+newQuantity);

		    connection.query(update_query, [{StockQuantity: newQuantity}, {id: id}]);
		 }
	});

	

}

// Funtction to run the Iquirer package to prompt the customer for input (ID, Quantity).
var customerPrompt = function() {
	
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Please enter the ID of the product you wish to purchase: ",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: "quantity",
        type: "input",
        message: "Please enter the amount of the product you wish to purchase: ",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer) {
        var query = 'SELECT * FROM Products WHERE ?';
        connection.query(query, {id: answer.id}, function(err, res) {
            for (var i = 0; i < res.length; i++) {  
            	if ( answer.quantity <= res[i].StockQuantity) {
            		updateDB(answer.id, answer.quantity);
            		var total = res[i].Price * answer.quantity;
            		console.log("Your total cost is $" + total + ".");
            	} else {
            		console.log("Insufficent quantity!");
            		customerPrompt();
            	}
            }
        })
    })
};

