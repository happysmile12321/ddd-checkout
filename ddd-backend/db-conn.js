const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ddd',
    password: "12345678",
    port: 18000
});

module.exports = {
    connection
}