var mysql = require('mysql');

var con = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'questions_answers'
})

con.connect();

module.exports = con;