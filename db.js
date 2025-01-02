const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nothing@04',
  database: 'h'
});

module.exports = connection;
