# Bamazon

### A command line interface app that explores the usage of databases

* Required Node Packages:
    * cli-table
    * inquirer
    * mysql

Bamazon is a multi-facted command line intercafe app that allows the user to take on one or more of several roles:

### Prior to running the application keep the following in mind:

 * Run the `bamazonSeed.sql` file in your MySQL workbench of choice.  This will set up the requisite database for running the application.
 * If you need to reset the database for any particular reason, running the `bamazonSeed.sql` request again through your MySQL workbench of choice will drop the existing database, then recreate the seed database.
 * *IMPORTANT* If you already have a database called `bamazon_db`, re-seeding the database as outlined above will delete your current `bamazon_db` database.
 * If for any reason you cannot exit out of the node application, hitting `control + c` on your keyboard should exit the application.

##### Customer Mode

* Navigate to the Bamazon folder in your terminal and execute the following command: `node bamazonCustomer.js`.  
* This will display a table for you, generated from the database seeded by the `bamazonSeed.sql` file enclosed and prompt you with a list of options from which you may select the item you wish to purchase.
* Using the arrow keys, select a valid option from the list of products.  Hit `Enter` on your keyboard.
* You will be prompted to enter the quantity of items that you wish to purchase; enter in a non-zero, positive integer and hit `Enter` on your keyboard.
* If Bamazon has enough of that item in stock, it will tell you how many of the item you've purchased and inform you of the total for your purchase.  Otherwise, you will be informed that there are not enough of that item in stock.
* If you have made a successful purchase, the `stock_quantity` in `bamazon_db` will be updated to reflect the new stock of the item you purchased.
* You will be asked if you want to make another purchase; if so, enter `Y` or `Yes` to select another purchase from the list.  If not, enter `N` or `No` to terminate the application.

Check out the enclosed images file for some screenshots of bamazonCustomer in action!

##### Manager Mode

* Navigate to the Bamazon folder in your terminal and executre the following command `node bamazonManager.js`.
* You will be prompted with a list of actions that you can exectue.  Scroll down with the arrow keys or enter in the number of the task you would like to execute
* Changes you make to the database in Manage mode will be reflected in the Customer mode as well, try it out!

## View Products for Sale:
* This action will show you a table of the avilable items for sale on Bamazon
* You will be asked if you would like to execute another action, Enter `y` or `Yes` to execute another action. Entering `n` or `No` will end the session

## View Low Inventory:
* This action will provide you with a list of products that have less than 50 items in stock.
* You will be asked if you would like to execute another action, Enter `y` or `Yes` to execute another action. Entering `n` or `No` will end the session

## Restock Inventory:
* This action will prompt you with the current list of items in stock asking you which item you would like to restock.
* After choosing your item, you will be asked how mauch you would like to add to the stock.  Entering a valid integer will add that quantity to the stock.  You can check the updated products table by answering `yes` when prompted to execute another action, then `View Products for Sale`.
* You will be asked if you would like to execute another action, Enter `y` or `Yes` to execute another action. Entering `n` or `No` will end the session

## Add New Product:
* This action will ask you the name of your new product.
* Follwing the name of the product, you will be prompted to add a department to the new product.
* Following the department, you will be promted to set the cost per unit of each item.
* Finally, you will be prompted with how many of the new product you would like to stock.
* You will be asked if you would like to execute another action, Enter `y` or `Yes` to execute another action. Entering `n` or `No` will end the session
* After choosing your new product, you can check the updated products table by answering `yes` when prompted to execute another action, then `View Products for Sale`.

Check out the enclosed images file for some screenshots of bamazonManager in action!

##### Supervisor Mode

_this functionality is still under development_

### END

Yeah, that's about it.