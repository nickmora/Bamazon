DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id FLOAT AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price FLOAT(3) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Dildo", "Adult Entertainment", 50.00, 500);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Die Hard DVD", "Movies", 11.95, 6);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Custom Coffee Mug", "Housewares", 8.70, 44);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Shotgun Silencer", "Sportsware", 129.99, 18);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("AAA Battery 46 Pack", "Electronics", 12.76, 1276);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("A Fancy DSLR Camera that You Won't Use", "Electronics", 749.99, 22);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Frozen, on Blu-ray!", "Movies", 5.00, 400);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Tube Socks", "Clothing", 23.99, 55);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Le Creuset Roasting Pot", "Housewares", 1200.39, 89);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Burt's Bees Chapstick (Grapefruit Flavor)", "Medical", 0.99, 6784);