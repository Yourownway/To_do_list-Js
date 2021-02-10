const List = require("../models/list");

exports.createNewList = async (req, res) => {
  let { listName } = req.body;
  console.log(listName);
  id = req.params.id;
  console.log(id);
  let newList = new List({ listName });
  console.log(newList);
  await List.createList((result) => {
    console.log(result);
  });
};
