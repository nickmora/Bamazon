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

function more(){
    inq.prompt([
        {
            name: "confirm",
            type: "confirm",
            message:"Would you like to execute another action?"
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