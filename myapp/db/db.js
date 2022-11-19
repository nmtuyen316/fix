const mysql = require('mysql')
require('dotenv').config();

const connection = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASS
});
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("connected mysql");
    }
});
module.exports = connection;