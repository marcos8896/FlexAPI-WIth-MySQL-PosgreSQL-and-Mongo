const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

var conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    multipleStatements: process.env.MULTI_STATEMENTS
    
});

conn.connect( err => {
    if (err) {
        console.log('Error trying to connect with Data Base: ' + err.stack);
        return;
    }
    console.log('HOST: ', process.env.DB_HOST);
    console.log('USER: ', process.env.DB_USER);
    console.log('PORT: ', process.env.DB_PORT);
    console.log('DB: ', process.env.DB_NAME);
    console.log('Connected as id ' + conn.threadId);
});

module.exports =  conn;