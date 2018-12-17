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

##### Manager Mode

##### Supervisor Mode
