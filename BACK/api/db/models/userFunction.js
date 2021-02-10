require("dotenv").config({ silent: true });
const db = require("../config/config");
//constructor
const User = (data) => {
  this.email = data.email;
  this.name = data.name;
  this.password = data.password;
};

User.findByEmail = (data, result) => {
  db.query(
    "SELECT userEmail FROM Users WHERE `userEmail` = ?",
    data.email,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      return (result = res);
    }
  );
};

// module.exports = User;
