const db = require("../config/config");
export default class Tasks {
  constructor(taskData) {
    this.taskName = taskData.taskName;
    this.idTask = taskData.idTask;
    this.idList = taskData.idList;
  }
  static getById(id, cb) {
    db.query("SELECT * FROM Tasks WHERE idTask = ?", id, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
}
