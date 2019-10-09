DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE product(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default NOT NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

SELECT * FROM product;

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Arai VX-PRO4 BARCIA", "Helmet", 674.96, 23);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Bell MOTO-9", "Helmet", 649.95, 15);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Alpinestars Supertech M10", "Helmet", 649.95, 7);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Shoei Neotec 2", "Helmet", 799.00, 18);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Dainese Assen Leather Pants", "Riding Gear", 399.00, 9);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Alpinestars Venture R Pants", "Riding Gear", 399.00, 9);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Klim Dakar Pants", "Riding Gear", 189.99, 9);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Klim Dakar Gloves", "Riding Gear", 189.99, 11);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Cognito Gloves", "Riding Gear", 39.50, 7);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Strata Googles", "Riding Gear", 35.00, 14);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Leatt 3DF AirFit Body Vest", "Riding Gear", 199.99, 15);