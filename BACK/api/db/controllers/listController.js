const List = require("../models/list");

exports.createNewList = async (req, res) => {
  let { listName } = req.body;
  console.log(listName);
  let { idUser } = req.params;

  let newList = new List({ listName, idUser });
  console.log(newList);
  await newList.createList((result) => {
    console.log(result, "<=======");
    if (result === null)
      return res
        .status(400)
        .json({ err: `impossible de crée la list ${newList.listName}` });
    return res
      .status(200)
      .json({ succes: ` la list ${newList.listName} à été crée avec succès` });
  });
};

exports.getListById = async (req, res) => {
  let { idList } = req.params;
  console.log(idList, "idList");
  List.getById(idList, (result) => res.status(200).json({ list: result }));
};

exports.getAllList = async (req, res) => {
  let { idUser } = req.params;

  await List.getAll(idUser, (result) => {
    if (!result)
      return res.status(400).json({ err: "Vous n'avez pas encore de list" });
    return res.status(200).json({ lists: result });
  });
};

exports.updateList = async (req, res) => {
  let { idUser, idList } = (data = req.params);
  let { listName } = (data = req.body);
  console.log(data);
  await List.update(data, (result) => {
    console.log(result, "result");
  });
};
