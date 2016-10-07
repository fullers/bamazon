# Bamazon
An amazon like application that uses node.js and connects to a MySQL Database to keep track of inventory. 

## Technologies used
The following technologies, tools, and npm packages were used:
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
## Getting Started

### Challenge 1 - Bamazon Customer 

The BamazonCustomer.js file shows a table of the products created in the Bamazon Schema or Database from the Products table.  Then prompts the user to enter the id and quantity of the product they wish to purchase.  If there is enough of the product in stock it will give the customer the Total cost for that purchase then update the database accordingly then prompt if they wish to continue shopping. If they choose yes then it will prompt the customer again for the ID and quantity. If they choose no then it will end the connection.  If the quantity is not less then or equal to what is in stoke it will display "Insufficent quantity!" then prompt the user again for ID and quantity.  


#### Orignal Database Quantities
![Alt Text](/images/BamazonCustomer/original-DBquantity.png?raw=true "Original Database Quantities")

#### Working version of BamazonCustomer.js 
![Alt Text](/images/BamazonCustomer/working-BamazonCustomerjs.png?raw=true "Working version of BamazonCustomer.js")

#### New Database Quantities
![Alt Text](/images/BamazonCustomer/new-DBquantity.png?raw=true "New Database Quantities")

#### Insufficent Quantity
![Alt Text](/images/BamazonCustomer/insufficent.png?raw=true "Insufficent Quantity")

### Challenge 2 - Bamazon Manager

The BamazonManger.js file is set of prompts for the managert to View Products for Sale, View Low Inventory, Add to Inventory, and Add New Product. Each prompt has its own function to handle the what needs to occur for that prompt.

#### View Products for Sale 

Shows the manager a table with all of the items available with the ID, Product Name, Department Name, Price, and Stock Quantity.

![Alt Text](/images/BamazonManager/viewprod4sale.png?raw=true "View Products for Sale")

#### View Low Inventory

Shows the manager a table of all the items in inventory that is less than five.

![Alt Text](/images/BamazonManager/viewlowinventory.png?raw=true "View Low Inventory")

#### Add to Inventory

Prompts the manager to enter the ID and the quantity of the product they want to increase.  After the data is enter, it will update the database or products table and increase the stock quantity by the amount specified for the ID provided.

![Alt Text](/images/BamazonManager/add2inventory.png?raw=true "Add to Inventory") 

#### Add New Product

Prompts the manager to enter the Product Name, Department Name, price, and quantity.  Once entered the data then is inserted into the database in the Products table.

![Alt Text](/images/BamazonManager/addnewprod.png?raw=true "Add New Product")

## Authors

* **Shaun** - *Javascript, SQL, Presentation* - [Shaun](https://github.com/fullers)

## License
   
   None

## Acknowledgments

Thank you to [Christi](https://github.com/clsavino/MySQL-Node-Bamazon) for the idea of using connection.end() and [Lonnie](https://github.com/Lonnie34J/Bamazon) for the idea of using the additonal prompt to allow the customer to continue shopping.
