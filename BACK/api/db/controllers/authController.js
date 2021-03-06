const { v1: uuidv1 } = require("uuid");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const checkEmail = (data) => {
  return new Promise((resolve) => {
    User.findByEmail(data, (result) => {
      if (result) resolve(result);
      if (result === null) {
      }
    });
  });
};

exports.signUp = async (req, res) => {
  let { userEmail, userName, userPassword } = (data = req.body);
  await checkEmail(userEmail).then((result) => {
    if (result.length !== 0) {
      return res.status(500).json({ err: `${result.userEmail} exsiste deja` });
    } else {
      const saltRounds = 10;

      bcrypt.hash(userPassword, saltRounds, function (err, hash) {
        if (err) throw err;
        if (hash) {
          data.id = uuidv1();
          let newUser = new User(data);
          console.log(newUser, "iciii");
          newUser.userPassword = hash;
          newUser.createUser((result) => {
            if (result) {
              return res
                .status(200)
                .json({ succes: `${newUser.userEmail} ajouter à la DB` });
            }
          });
        }
      });
    }
  });
};

exports.signIn = async (req, res) => {
  let { userEmail, userPassword } = (data = req.body);

  await checkEmail(data.userEmail).then((result) => {
    if (result.length == 0) {
      return res
        .status(500)
        .json({ err: `${data.userEmail} n'est pas enregistré dans la db` });
    } else {
      bcrypt.compare(
        data.userPassword,
        result.userPassword,
        (err, validate) => {
          if (validate) {
            let newUser = new User(result);
            if (newUser)
              return res.status(200).json({ id: newUser.id, token: 1 });
          } else res.status(500).json({ err: `error mot de passe` });
        }
      );
    }
  });
};
