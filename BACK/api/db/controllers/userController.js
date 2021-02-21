const User = require("../models/user");

exports.getUserById = async (req, res) => {
  await User.getById(req.params.id, (result) => {
    if (!result) {
      return res.status(400).json({ err: "utilisateur inconnu" });
    }
    // let { id, userName, userEmail } = (data = result);
    return res.status(200).json({ User: result });
  });
};
