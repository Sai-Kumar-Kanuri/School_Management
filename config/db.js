require('dotenv').config();
// const mysql = require('mysql2');


// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const db = mysql.createConnection({
    host: process.env.DB_HOST,        
    port: process.env.DB_PORT,        
    user: process.env.DB_USER,        
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,    
    ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./ca.pem").toString(),
  },
});


// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Database.');
// });

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to the MySQL database.');
    }
});


module.exports = db;
