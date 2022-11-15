const mysql = require('mysql')
require('dotenv').config();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.PASS
});
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        connection.query("CREATE DATABASE mydb", function (err, result) {
            if (err) throw err;
            console.log("Database created");
          });
    }
});