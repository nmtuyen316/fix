const mysql = require('mysql')
const env = require('dotenv')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:env.PASS
});
console.log(env.)
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('connect sql');
    }
});
module.exports = connection;