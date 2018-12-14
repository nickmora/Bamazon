var mysql = require("mysql");
var inq = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

function display(){
    connection.query("SELECT * FROM products", (err, resp)=>{
        makeTable(resp);
    });
    more();
}

function begin(){
    inq.prompt([
        {
            name:"start",
            message:"Welcome to Bamazon Manager. What would you like to do?",
            type:"rawlist",
            choices:["View products for Sale", "View Low Inventory", "Restock Inventory", "Add New Product"]
        }
    ]).then(ans=>{
        switch(ans.start){
            case "View products for Sale":{
                display();
            };
            break;
            case "View Low Inventory":{
                viewLow();
            };
            break;
            case "Restock Inventory":{
                addInv();
            };
            break;
            case "Add New Product":{
                askNew();
            };
            break;
            default:{
                console.log("I'm sorry, I didn't understand");
            };
        };
    });
};

begin();

function viewLow(){
    connection.query("SELECT * FROM products WHERE stock_quantity<=50", (err, resp)=>{
        makeTable(resp);
        more();
    })
}

function addInv(){
    connection.query('SELECT * FROM products', (err, resp)=>{
        var currentStock = resp[0].stock_quantity;
        
        inq.prompt([
            {
                type: "rawlist",
                message: "What product would you like to restock?",
                name: "item",
                choices: function(){
                    var tibble = [];
                    for(let i=0; i<resp.length; i++){
                        tibble.push(resp[i].product_name);
                    };
                    return tibble;
                }
            },{
                name: "amount",
                type: "input",
                message: "How many would you like to restock?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(ans=>{
            connection.query("UPDATE products SET ? WHERE ?", [
                {
                    stock_quantity: parseInt(currentStock)+parseInt(ans.amount),
                },{
                    product_name: ans.item,
                }
            ], (err, resp)=>{
                if (err) throw err;
                console.log(ans.item+' stock updated!\n');
            });
            more()
        });
    });
};

function makeTable(resp){
    var table = new Table({
        head: ['ID', 'Product', 'Price ($)', 'Quantity'],
        colWidths: [5, 55, 15, 15],
    });
    resp.forEach(element => {
        table.push([element.item_id, element.product_name, element.price.toFixed(2), element.stock_quantity])
    });
    console.log(table.toString());
};

function askNew(){
    inq.prompt([
        {
            name:'name',
            message:'What is the name of the product that you would like to add?',
            type: "input"
        },{
            name: 'dept',
            message: 'What department does it fall under?',
            type: 'input',
        },{
            name: "price",
            message: "How much does it cost per unit?",
            type: "input",
            validate: function(value) {
                if (isNaN(value) === false&&parseFloat(value)>0) {
                    return true;
                }
                return false;
            }
        },{
            name: "stock",
            message: "How many units are we adding to our stock?",
            type: 'input',
            validate: function(value) {
                if (isNaN(value) === false&&parseInt(value)>0) {
                    return true;
                }
                return false;
            }
        }
    ]).then(ans=>{
        addItem(ans.name, ans.dept, ans.price, ans.stock)
    })
}

function addItem(name, dept, price, stock){
    var sql=`INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('${name}', '${dept}', ${parseFloat(price)}, ${parseInt(stock)})`;
    connection.query(sql, (err, resp)=>{
        if(err) throw err;
        console.log(`New Product, ${name}, added!`);
        more();
    })
}

function more(){
    inq.prompt([
        {
            name: "confirm",
            type: "confirm",
            message:"Would you like to purchase something else?"
        }
    ]).then(ans=>{
        if(ans.confirm){
            begin();
        }
        else{
            console.log("Goodbye");
            connection.end();
        }
    })
}