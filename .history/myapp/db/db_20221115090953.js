const mysql = require('mysql')
const env = require('dotenv')

const connection = mysql.createConnection({
    host:'localhost',
    database:'testing',
    user:'root',
    password:env.PA
});

connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('connect sql');
    }
});
module.exports = connection;