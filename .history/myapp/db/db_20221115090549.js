const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    database:'testing',
    user:'root',
    password:'Tuyen00000'
});

connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('connect sql');
    }
});
module.exports = connection;