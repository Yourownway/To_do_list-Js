const db = require("../config/config");

class List {
  constructor(listData) {
    this.idList = listData.idList;
    this.listName = listData.listName;
    this.idUser = listData.idUser;
  }
  //getAll list whit idUser
  static getAll(id, cb) {
    db.query(`SELECT *  FROM Lists WHERE idUser = ?`, id, (err, result) => {
      if (err) throw err;
      if (result.length > 0) return cb(result);

      return cb(null);
    });
  }
  static getById(id, cb) {
    db.query(
      `SELECT idList , ListName , idUser FROM Lists WHERE idList = ?`,
      id,
      (err, result) => {
        if (err) throw err;

        return cb(result[0]);
      }
    );
  }
  static update(data, cb) {
    db.query(
      `UPDATE Lists SET ListName = '${data.listName}' WHERE idList = ${data.idList}`,
      (err, result) => {
        if (err) throw err;

        return cb(result);
      }
    );
  }

  static delete(data, cb) {
    db.query(
      `DELETE FROM Lists WHERE idList = ${data.idList}`,
      (err, result) => {
        if (err) throw err;
        if (result.affectedRows == 0) return cb(null);
        return cb(result);
      }
    );
  }

  createList(cb) {
    let sql = `INSERT INTO Lists ( listName, idUser) VALUES ('${this.listName}', '${this.idUser}')`;

    db.query(sql, function (err, result) {
      if (err) throw err;

      if (result) return cb(result);
      return cb(null);
    });
  }
}
module.exports = List;
