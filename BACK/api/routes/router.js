const authController = require("../db/controllers/authController");
const userController = require("../db/controllers/userController");
const listController = require("../db/controllers/listController");

class Router {
  constructor(express) {
    const router = express.Router();

    router.route("/signIn").post(authController.signUp);
    router.route("/signUp").post(authController.signIn);

    router.route("/user/:id").get(userController.getUserById);

    router.route("/user/:id/create").post(listController.createNewList);
    return router;
  }
}

module.exports = (express) => new Router(express);
