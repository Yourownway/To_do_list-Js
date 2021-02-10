const db = require("../config/config");
class Task {
  constructor(taskData) {
    this.taskName = taskData.taskName;
    this.idTask = taskData.idTask;
    this.idList = taskData.idList;
  }
  createTask(cb) {
    console.log(this.taskName, "taskData");
    let sql = `INSERT INTO Tasks ( taskName, idList) VALUES ('${this.taskName}', '${this.idList}')`;

    db.query(sql, function (err, result) {
      if (err) throw err;
      //   console.log(result, "ici");

      if (result) return cb(result);
      return cb(null);
    });
  }
  static getById(id, cb) {
    db.query("SELECT * FROM Tasks WHERE idTask = ?", id, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
  static update(data, cb) {
    db.query(
      `UPDATE Tasks SET TaskName = '${data.TaskName}' WHERE idTask = ${data.idTask}`,
      (err, result) => {
        if (err) throw err;

        return cb(result);
      }
    );
  }

  static delete(data, cb) {
    db.query(
      `DELETE FROM Tasks WHERE idTask = ${data.idTask}`,
      (err, result) => {
        if (err) throw err;
        if (result.affectedRows == 0) return cb(null);
        return cb(result);
      }
    );
  }
}
module.exports = Task;
