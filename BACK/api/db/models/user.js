const db = require("../config/config");

class User {
  constructor(userData) {
    this.id = userData.id;
    this.userEmail = userData.email;
    this.userPassword = userData.password;
    this.userName = userData.firstName;
  }
  static getById(id, cb) {
    db.query(
      `SELECT id , userEmail , userName FROM Users WHERE id = ?`,
      id,
      (err, result) => {
        if (err) throw err;
        console.log("getUserById", result);
        return cb(result[0]);
        // if (result.length > 0) {
        //   return cb(result[0]);
        // } else {
        //   return cb(result);
        // }
      }
    );
  }
  static findByEmail(data, cb) {
    db.query(
      `SELECT * FROM Users WHERE userEmail = '${data}'`,

      (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
          return cb(result[0]);
        } else {
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

// module.exports = {
//   findByEmail: (data, cb) => {
//     db.query(
//       `SELECT userEmail FROM Users WHERE userEmail = '${data}'`,
//       data,
//       (err, result) => {
//         if (err) throw err;

//         if (result.length > 0) {
//           console.log(result, "tutu");
//           return cb(result[0].userEmail);
//         } else {
//           console.log("models", result);
//           return cb(result);
//         }
//       }
//     );
//   },

//   createUser(data) {
//     db.query(
//       `INSERT INTO Users VALUES (userEmail, userPassword, userName)`,
//       data,
//       function (err, row) {
//         console.log(err, "error");
//         if (err) throw err;
//         return data;
//       }
//     )}
// };
