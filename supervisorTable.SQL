USE bamazon_db;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments(
    department_id INT AUTO_INCREMENT,
    department_name VARCHAR(50) NOT NULL,
    overhead_costs FLOAT(10,2) NOT NULL,
    PRIMARY KEY (department_id)
)

SELECT department_name FROM products;



