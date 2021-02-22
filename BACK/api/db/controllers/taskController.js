const Task = require("../models/task");
const { v1: uuidv1 } = require("uuid");
exports.createNewTask = async (req, res) => {
  let { taskName, idColumn, idList } = (data = req.body);

  data.idTask = uuidv1();

  let newTask = new Task(data);
  console.log(idColumn, taskName);
  await newTask.createTask((result) => {
    if (result === null)
      return res
        .status(400)
        .json({ err: `impossible de crée la tache ${newTask.taskName}` });
    return res
      .status(200)
      .json({ succes: ` la tache ${newTask.taskName} à été crée avec succès` });
  });
};
exports.getTaskById = async (req, res) => {
  let { idTask } = req.params;
  Task.getById(idTask, (result) => res.status(200).json({ task: result }));
};

exports.getAllTask = async (req, res) => {
  let { idList } = req.params;

  await Task.getAll(idList, (result) => {
    if (!result)
      return res.status(400).json({ err: "Vous n'avez pas encore de task" });
    return res.status(200).json({ tasks: result });
  });
};

exports.updateTask = async (req, res) => {
  let { idList, idTask } = (data = req.params);
  data.taskName = req.body.taskName;

  await Task.update(data, (result) => {
    if (!result)
      return res.status(500).json({ err: "modification impossible" });
    return res
      .status(200)
      .json({ succes: `nom de la task modifié: ${data.taskName}` });
  });
};

exports.deleteTask = async (req, res) => {
  let { idList, idTask } = (data = req.params);
  await Task.delete(data, (result) => {
    if (!result)
      return res
        .status(500)
        .json({ err: ` la task id: ${data.idTask} n'exsiste pas ` });
    return res.status(200).json({ succes: "task supprimé" });
  });
};
