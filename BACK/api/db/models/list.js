const db = require("../config/config");

class List {
  constructor(listData) {
    this.idList = listData.idList;
    this.listName = listData.listName;
    this.idUser = listData.idUser;
  }
  //getAll list whit idUser
  static getAll(id, cb) {
    db.query(`SELECT * FROM Lists WHERE idUser = ?`, id, (err, result) => {
      if (err) throw err;
      if (result.length > 0) return cb(result);
      console.log("tutu");
      return cb(null);
    });
  }
  static getById(id, cb) {
    db.query(
      `SELECT idList , ListName , idUser FROM Lists WHERE idList = ?`,
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
  static update(data, cb) {
    db.query(
      `UPDATE Lists SET ListName = ${data.ListName} WHERE idList = ${data.idList}`,
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  }
  //   static findByEmail(data, cb) {
  //     db.query(
  //       `SELECT * FROM Users WHERE userEmail = '${data}'`,

  //       (err, result) => {
  //         if (err) throw err;

  //         if (result.length > 0) {
  //           return cb(result[0]);
  //         } else {
  //           return cb(result);
  //         }
  //       }
  //     );
  //   }

  createList(cb) {
    console.log(this.listName, "listData");
    let sql = `INSERT INTO Lists ( listName, idUser) VALUES ('${this.listName}', '${this.idUser}')`;

    db.query(sql, function (err, result) {
      if (err) throw err;
      //   console.log(result, "ici");

      if (result) return cb(result);
      return cb(null);
    });
  }
}
module.exports = List;

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
