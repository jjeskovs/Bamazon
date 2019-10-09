var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "$Avalon79",
    database: "bamazon_DB"
});

connection.connect(function(err){
    if (err) throw err; // will call the error and will act like return (breakout out of code)
    
    console.log(`connected as id ${connection.thredId}`)
    
});

function displayTable(){
    
    connection.query("SELECT * FROM product", function(err, data){
        if(err) throw err;
        var table = new Table({
            head: ["Item ID", "Product Name", "Department", "Price", "Quantity"],
            colWidths: [10,30,30,10,14]
        });

        for (var i = 0; i < data.length; i++){
            table.push(
				[data[i].id, data[i].product_name, data[i].department_name, data[i].price, data[i].stock_quantity]
				);
        }
        
        
        console.log(table.toString());
        
    });

};  
displayTable();  
