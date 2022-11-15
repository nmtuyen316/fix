const mysql = require('mysql')
require('dotenv').config();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Tuyen00000@'
});
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        connection.query("", function (err, result) {
            if (err) throw err;
            console.log("Database created");
          });
    }
});