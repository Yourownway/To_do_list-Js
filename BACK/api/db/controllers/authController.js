const User = require("../models/user");
const bcrypt = require("bcrypt");
const checkEmail = (data) => {
  return new Promise((resolve) => {
    User.findByEmail(data, (result) => {
      if (result) resolve(result);
      else console.log("tutu");
      if (result === null) {
      }
    });
  });
};

exports.signUp = async (req, res) => {
  let { email, firstName, password } = (data = req.body);
  console.log(firstName);
  await checkEmail(data.email).then((result) => {
    if (result.length !== 0) {
      console.log(result);
      return res.status(500).json({ err: `${result} exsiste deja` });
    } else {
      const saltRounds = 10;

      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) throw err;
        if (hash) {
          password = hash;

          let newUser = new User({ email, password, firstName });

          if (newUser)
            newUser.createUser((result) => {
              return res
                .status(200)
                .json({ succes: `${newUser.email} ajouter à la DB` });
            });
        }
      });
    }
  });
};

exports.signIn = async (req, res) => {
  let { email, firstName, password } = (data = req.body);
  console.log(firstName);
  await checkEmail(data.email).then((result) => {
    console.log(result);
    if (result.length == 0) {
      console.log(result);
      return res
        .status(500)
        .json({ err: `${data.email} n'est pas enregistré dans la db` });
    } else {
      bcrypt
        .compare(data.password, result.userPassword)
        .then(function (result) {
          if (result == true) {
            console.log("GG");
            let newUser = new User({ email, password, firstName });
            console.log(newUser);
            if (newUser)
              return res
                .status(200)
                .json({ succes: `Bienvenu ${newUser.firstName} ` });
          } else res.status(500).json({ err: `error mot de passe` });
        });
    }
  });
};
