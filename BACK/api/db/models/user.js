const db = require("../config/config");

class User {
  constructor(userData) {
    this.id = userData.id;
    this.userEmail = userData.userEmail;
    this.userPassword = userData.userPassword;
    this.userName = userData.userName;
  }
  static getById(id, cb) {
    db.query(
      `SELECT id , userEmail , userName FROM Users WHERE id = ?`,
      id,
      (err, result) => {
        if (err) throw err;
        console.log("getUserById", result);
        return cb(result[0]);
      }
    );
  }
  static findByEmail(data, cb) {
    db.query(
      `SELECT * FROM Users WHERE userEmail = '${data}'`,

      (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
          console.log("ok");
          return cb(result[0]);
        } else {
          console.log("pas ok");
          return cb(result);
        }
      }
    );
  }

  createUser(cb) {
    const sql = `INSERT INTO Users (userEmail, userPassword,   userName) VALUES ('${this.userEmail}', '${this.userPassword}','${this.userName}')`;

    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result, "ici");
      return cb(result);
    });
  }
}
module.exports = User;
