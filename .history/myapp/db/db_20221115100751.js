const mysql = require('mysql')require('dotenv')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:env.PASS
});
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('connect sql');
    }
});
module.exports = connection;