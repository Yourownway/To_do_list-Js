const db = require("../config/config");

class User {
  constructor(userData) {
    this.email = userData.email;
    this.password = userData.password;
    this.firstName = userData.firstName;
  }

  static findByEmail(data, cb) {
    db.query(
      `SELECT userEmail FROM Users WHERE userEmail = '${data}'`,
      data,
      (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
          return cb(result[0].userEmail);
        } else {
          return cb(result);
        }
      }
    );
  }
  get create() {
    return this.tutu();
  }

  tutu() {
    db.query(
      `INSERT INTO Users VALUES (userEmail = '${this.email}', userPassword = '${this.password}', userName = '${this.firstName}')`,
      (err, result) => {
        if (err) throw err;
        console.log("model", result);
      }
    );
  }

  createUser() {
    // db.query(
    //   `INSERT INTO Users VALUES (userEmail = '${this.email}', userPassword = '${this.password}', userName = '${this.firstName}')`,
    //   (err, result) => {
    //     if (err) throw err;
    //     console.log("model", result);
    //   }
    // );
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
