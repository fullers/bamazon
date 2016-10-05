# bamazon
An amazon like application that uses node.js and connects to a MySQL Database to keep track of inventory. 

## Technologies used
* Javascript
* MySQL Server and Workbench
* Node.js
* NPM Packages
	* CLI-Table2
	* MySQL  
	* Inquirer

## Challenge 1

The BamazonCustomer.js file shows a table of the products created in the Bamazon Schema or Database from the Products table.  Then prompts the user to enter the id and quantity of the product they wish to purchase.  If there is enough of the product in stock it will give the customer the Total cost for that purchase then update the database accordingly. Otherwise will say "Insufficent quantity!" then prompt the user again for ID and quantity.  


### Orignal Database Quantities
![Alt Text](/images/BamazonCustomer/original-DBquantity.png?raw=true "Original Database Quantities")

### Working version of BamazonCustomer.js 
![Alt Text](/images/BamazonCustomer/working-BamazonCustomerjs.png?raw=true "Working version of BamazonCustomer.js")

### New Database Quantities
![Alt Text](/images/BamazonCustomer/original-DBquantity.png?raw=true "New Database Quantities")

## Authors

* **Shaun** - *Javascript, SQL, Presentation* - [Shaun](https://github.com/fullers)

## License
   
   None