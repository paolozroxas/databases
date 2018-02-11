var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student", password: "student",
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('connected to db');
  }
});


module.exports = connection;

