const mysql = require('mysql')
require('dotenv').config();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.PASS
});
console.log
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('connect sql');
    }
});
module.exports = connection;