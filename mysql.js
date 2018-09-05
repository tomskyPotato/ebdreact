var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.2.109",
  user: "myusername",
  password: "mypassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});