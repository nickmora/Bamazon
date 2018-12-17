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
        if(err) throw(err);
        var table = new Table({
            head: ['Product', 'Price ($)'],
            colWidths: [55, 15],
        });
        resp.forEach(element => {
            table.push([element.product_name, element.price.toFixed(2)])
        });
        console.log(table.toString());
    });
}


connection.connect(err=>{
    if(err) throw err;
    console.log("Connected as id " +connection.threadId);
    display();
    begin();
})

function begin() {
    connection.query('SELECT * FROM products', (err, resp)=>{
        if(err) throw err;
        inq.prompt([
            {
                name: "welcome",
                type: "rawlist",
                choices: function(){
                    var tibble = [];
                    for(let i=0; i<resp.length; i++){
                        tibble.push(resp[i].product_name);
                    };
                    return tibble;
                },
                message: "Welcome to Bamazon! What would you like to purchse?"
            },{
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?",
                validate: function(value) {
                    if (isNaN(value) === false&&parseInt(value)>0) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(ans=>{
            checkStock(ans);
        })
    })
}

function purchase(obj, quant, cost){
        console.log(`Congrats! You've purchased ${obj.quantity} ${obj.welcome}(s)`)
        var query = "UPDATE products SET ? WHERE ?"
        connection.query(query, [{
            stock_quantity: parseInt(quant)-parseInt(obj.quantity),
        },{
            product_name: obj.welcome
        }],
        (err, resp)=>{
            if(err) throw err;
            console.log(`Your total is $${cost.toFixed(2)}`);
        })
}

function checkStock(obj){
    connection.query("SELECT * FROM products WHERE ?",
    [{
        product_name: obj.welcome,
    }],
    (err, resp)=>{
        if(err) throw err;
        if(parseInt(obj.quantity)<=parseInt(resp[0].stock_quantity)){
            var quant = resp[0].stock_quantity;
            var cost = parseFloat(resp[0].price)*parseFloat(obj.quantity);
            purchase(obj, quant, cost);

        }
        else{
            console.log(`I'm sorry, you're trying to purchase more ${obj.welcome}s than we have`);
        };
    });
    more();
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

function trackSales(cost, name){
    connection.query("UPDATE product_sales SET ? WHERE ?",[
        {
            product_sales: parseFloat(cost)
        },{
            product_name: name,
        }
    ])
}