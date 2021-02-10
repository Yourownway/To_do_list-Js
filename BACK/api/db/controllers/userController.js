const User = require("../models/user");

const checkEmail = (data) => {
  return new Promise((resolve) => {
    User.findByEmail(data, (result) => {
      console.log(result, "checkEmail");
      if (result) resolve(result);
      else console.log("tutu");
      if (result === null) {
        console.log("tata");
      }
    });
  });
};
// const checkEmail = async (data) => {
//   await Users.findByEmail(data, (res) => {
//     console.log(res, "tutu");
//     return res;
//   });
// };

exports.signUp = async (req, res) => {
  let { email, firstName, password } = (data = req.body);
  console.log(firstName);
  await checkEmail(data.email).then((result) => {
    if (result.length !== 0) {
      console.log(result);
      return res.status(500).json({ err: `${result} exsiste deja` });
    } else {
      const bcrypt = require("bcrypt");
      const saltRounds = 10;

      let test;
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) throw err;
        if (hash) {
          password = hash;

          let newUser = new User({ email, password, firstName });
          console.log(newUser);
          if (newUser) newUser.tutu();
        }

        return res.status(200).json({ ok: `${result} ajouter à la DB` });
      });
    }
  });

  // if (userExist) {
  //   console.log(userExist);
  // }

  // if (userExist) {
  //   console.log("tutu");
  //
  // }
};
