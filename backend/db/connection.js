// const connection = mysql.createConnection({
//     host:process.env.MYSQL_HOST,
//     user:process.env.MYSQL_USER,
//     password:process.env.MYSQL_PASS
// });
const mysql = require('mysql');

module.exports = async (params) => new Promise(
(resolve, reject) => {
    const connection = mysql.createConnection(params);
    connection.connect(error => {
        if (error) {
            reject(error);
            return;
        }
        resolve(connection);
    })
});