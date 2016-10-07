// Require MySQL, Prompt, CLI-Table
var mysql = require('mysql');

var inquirer = require('inquirer');

var Table = require('cli-table2');

// Require Connect.js
 var connect = require('./connect.js');
 var connection = connect;

// Starts the application
connection.connect(function(err) {
    managerPrompt();
})

var continuePrompt = function() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "Would like to:",
        choices: ["Go Back to the List", "Quit"]
    }).then(function(answer) {
        switch(answer.action) {
            case 'Go Back to the List':
                managerPrompt();
            break;

            case 'Quit':
                connection.end();
            break;
        }
    })
};

var managerPrompt = function() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Quit"]
    }).then(function(answer) {
        switch(answer.action) {
            case 'View Products for Sale':
                viewProductsForSale();
            break;

            case 'View Low Inventory':
                viewLowInventory();
            break;

            case 'Add to Inventory':
                addInventory();
            break;

            case 'Add New Product':
                addNewProduct();
            break;
            case 'Quit':
            	connection.end();
            break;
        }
    })
};

// Function that displays the product table.
var viewProductsForSale = function() {

	connection.query('SELECT * FROM Products', function(err, results){
		
		var table = new Table({
			head: ['ID', 'Product Name', 'Department Name', 'Price', 'Stock Quantity'],
		   	//colWidths: [20, 200, 50]
		});

		for (var i=0; i <results.length; i++) {
			table.push(

				[results[i].id, results[i].ProductName, results[i].DepartmentName, '$'+results[i].Price, results[i].StockQuantity]
				
			);
			
		}
		console.log(table.toString());
		continuePrompt();
	});

};

var viewLowInventory = function() {

	var query = 'SELECT * FROM Products WHERE StockQuantity < 5';
	
	connection.query(query, function(err, results){
		

		var table = new Table({
			head: ['ID', 'Product Name', 'Department Name', 'Price', 'Stock Quantity'],
		});

		for (var i=0; i <results.length; i++) {
			table.push(

				[results[i].id, results[i].ProductName, results[i].DepartmentName, '$'+results[i].Price, results[i].StockQuantity]
				
			);
			
	}
		console.log(table.toString());
		continuePrompt();
	});

};

function updateDB(id, quantity) {
    
    var sel_query = 'SELECT StockQuantity FROM Products WHERE ?';
	var update_query = 'UPDATE Products SET ? WHERE ?';

	connection.query(sel_query, {id: id}, function(err, res){
		 for (var i = 0; i < res.length; i++) { 
		 	var newQuantity = res[i].StockQuantity + parseInt(quantity);
		    //console.log("New Quantity: "+newQuantity);

		    connection.query(update_query, [{StockQuantity: newQuantity}, {id: id}]);
		 }
		 
	});
}

var addInventory = function() {
	
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Enter the ID of the product you want to add: ",
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
        message: "Enter the amount of the product you wish to add to iventory: ",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer) { 

    	    updateDB(answer.id, answer.quantity);
		    continuePrompt();

		})        
};
        
var addNewProduct = function() {
	
	 inquirer.prompt([{
        name: "productname",
        type: "input",
        message: "Enter the name of the product you wish to add to the inventory: ",
    }, {
    	name: "department",
    	type: "input",
    	message: "Enter the name for the Department Name: ",

    }, {
    	name: "price",
    	type: "input",
    	message: "Enter the price for the product: ",
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
        message: "Please enter the amount of the product you wish to add to iventory: ",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer) { 

    	var price = parseInt(answer.price);
    	var q = parseInt(answer.quantity);
    	var query = "INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("+mysql.escape(answer.productname)+","+mysql.escape(answer.department)+","+mysql.escape(price)+","+mysql.escape(q)+")";
    	connection.query(query, function(err,results){
				if (err) throw err;
		});

    	    console.log("The new product has been added to the inventory!");
			continuePrompt();

		})

	
};
