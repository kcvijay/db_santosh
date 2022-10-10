const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "testUser",
  password: "secretword",
  database: "testdb",
});

connection.connect();
connection.query(`select * from tasks`, (error, results, fields) => {
  if (error) {
    return console.log(error);
  } else return console.log(results);
});

connection.end();
