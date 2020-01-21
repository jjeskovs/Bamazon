require("dotenv").config(); // for the password 

var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: process.env.MYSQL_PASS,
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err; // will call the error and will act like return (breakout out of code)

  console.log(`connected as id ${connection.thredId}`);
});

function displayTable() {
  connection.query("SELECT * FROM product", function(err, data) {
    if (err) throw err;
    var table = new Table({
      head: ["Item ID", "Product Name", "Department", "Price", "Quantity"],
      colWidths: [10, 30, 30, 10, 14]
    });

    for (var i = 0; i < data.length; i++) {
      table.push([
        data[i].id,
        data[i].product_name,
        data[i].department_name,
        data[i].price,
        data[i].stock_quantity
      ]);
    }
    console.log(table.toString());
    choices();
  });
}

function choices() {
  inquirer
    .prompt([
      {
        name: "action",
        type: "input",
        message: "What do you want to buy?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many items you would like to purchase?"
      }
    ])
    .then(answers => {
      var product = answers.action;
      var quantity = answers.quantity;
      // console.log(product)
      // console.log(quantity)
      purchase(product, quantity);
    });
}

function purchase(product, quantity) {
  connection.query("SELECT * FROM product WHERE ?", 
  [{ id: product }], function(err,results){
    if (err) throw err;
    // console.log(results);
    // console.log(results[0].stock_quantity);

    if (results[0].stock_quantity >= quantity) {
      console.log(`You are in luck, we have your item! You total is: $${results[0].price * quantity} \n `);
      
      connection.query(
        "UPDATE product SET ? WHERE ?",
        [
          {
            stock_quantity: results[0].stock_quantity - quantity
          },
          {
            id: product
          }
        ]
      );
        git 
    } else {
      console.log(`Sorry, we only have ${results[0].stock_quantity} in stock`);
    }
    inquirer.prompt([
      {
          type: "list",
          name: "action",
          message: "What would you like to do next\n",
          choices: [ "Would you like to buy something else?", "Would you like to leave our lovely store?" ],
          filter: function( val ){return val.toLowerCase()}
        }
      ]).then (answers => {
        if (answers.action === "Would you like to buy something else?"){
          console.log("Great!!! Make your Choice")
          displayTable();
                  
        }else if (answers.action === "Would you like to leave our lovely store?"){
              console.log("See you later")
              connection.end();
        }
      })
  });
}
displayTable()
