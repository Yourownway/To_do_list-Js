require("dotenv").config({ silent: true });
const mysql = require("mysql");

var connexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "to_do_list",
});
connexion.connect((err) => {
  if (err) {
    return console.error("error: " + err.message);
  } else {
    console.log("Connected to the MySQL server.");
  }
  return connexion;
});

module.exports = connexion;
