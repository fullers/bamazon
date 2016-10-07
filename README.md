# Bamazon
An amazon like application that uses node.js and connects to a MySQL Database to keep track of inventory. 

## Technologies used
* Javascript
* MySQL Server and Workbench
* Node.js
* NPM Packages
	* CLI-Table2
	* MySQL  
	* Inquirer

## Requirements

You will need to creat a file called connect.js and place the following code, replacing **Your username** and **Your Password** with the appropriate information:

```javascript

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'Your username',
	password: 'Your Password',
	database: 'Bamazon'
});

connection.connect(function(err) {

	if (err) throw err;
});

module.exports = connection;

```

## Challenge 1 - Bamazon Customer 

The BamazonCustomer.js file shows a table of the products created in the Bamazon Schema or Database from the Products table.  Then prompts the user to enter the id and quantity of the product they wish to purchase.  If there is enough of the product in stock it will give the customer the Total cost for that purchase then update the database accordingly then prompt if they wish to continue shopping. If they choose yes then it will prompt the customer again for the ID and quantity. If they choose no then it will end the connection.  If the quantity is not less then or equal to what is in stoke it will display "Insufficent quantity!" then prompt the user again for ID and quantity.  


### Orignal Database Quantities
![Alt Text](/images/BamazonCustomer/original-DBquantity.png?raw=true "Original Database Quantities")

### Working version of BamazonCustomer.js 
![Alt Text](/images/BamazonCustomer/working-BamazonCustomerjs.png?raw=true "Working version of BamazonCustomer.js")

### New Database Quantities
![Alt Text](/images/BamazonCustomer/new-DBquantity.png?raw=true "New Database Quantities")

### Insufficent Quantity
![Alt Text](/images/BamazonCustomer/insufficent.png?raw=true "Insufficent Quantity")

## Authors

* **Shaun** - *Javascript, SQL, Presentation* - [Shaun](https://github.com/fullers)

## License
   
   None
<<<<<<< HEAD

## Acknowledgments

Thank you to Christi for the idea of using connection.end() and Lonnie for the idea of using the additonal prompt to allow the customer to continue shopping.
=======
>>>>>>> 141e3ccd3cfdae159a67fcd3fae9ae95731ceeff
