const mysql = require('mysql2');

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.MYSQL_DB,
  password: process.env.DB_PASS,
});




module.exports = db.promise()