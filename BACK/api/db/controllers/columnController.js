const Columns = require("../models/column");

// exports.createNewTask = async (req, res) => {
//   let { taskName } = req.body;
//   let { idList } = req.params;

//   let newTask = new Task({ taskName, idList });
//   await newTask.createTask((result) => {
//     if (result === null)
//       return res
//         .status(400)
//         .json({ err: `impossible de crée la tache ${newTask.taskName}` });
//     return res
//       .status(200)
//       .json({ succes: ` la tache ${newTask.taskName} à été crée avec succès` });
//   });
// };
// exports.getTaskById = async (req, res) => {
//   let { idTask } = req.params;
//   Task.getById(idTask, (result) => res.status(200).json({ task: result }));
// };

exports.getAllColumns = async (req, res) => {
  let { idList } = req.params;

  await Columns.getAll(idList, (result) => {
    if (!result)
      return res.status(400).json({ err: "Vous n'avez pas encore de column" });
    return res.status(200).json({ columns: result });
  });
};

// exports.updateTask = async (req, res) => {
//   let { idList, idTask } = (data = req.params);
//   data.taskName = req.body.taskName;

//   await Task.update(data, (result) => {
//     if (!result)
//       return res.status(500).json({ err: "modification impossible" });
//     return res
//       .status(200)
//       .json({ succes: `nom de la task modifié: ${data.taskName}` });
//   });
// };

// exports.deleteTask = async (req, res) => {
//   let { idList, idTask } = (data = req.params);
//   await Task.delete(data, (result) => {
//     if (!result)
//       return res
//         .status(500)
//         .json({ err: ` la task id: ${data.idTask} n'exsiste pas ` });
//     return res.status(200).json({ succes: "task supprimé" });
//   });
// };
