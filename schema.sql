CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	ProductName VARCHAR(100) NOT NULL,
	DepartmentName VARCHAR(100) NOT NULL,
	Price INTEGER(10),
	StockQuantity INTEGER(10),
	PRIMARY KEY (id)
);

SELECT * FROM Products;

INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
VALUES ("Video Game", "Electronics", 49.99, 20),
	   ("Game System", "Electronics", 399.99, 20), 	
	   ("Tablet", "Electronics", 100.00, 50),
	   ("Laptop", "Computers", 600.00, 100),
	   ("Desktop", "Computers", 400.00, 100),
	   ("Monitor", "Computers", 100.00, 100),
	   ("Men's Suites", "Clothing", 200.00, 50),
	   ("Women's Suites", "Clothing", 200.00, 50),
	   ("Men's Shoes", "Shoes", 49.99, 50),
	   ("Women's Shoes", "Shoes", 49.99, 50);

	   
	   