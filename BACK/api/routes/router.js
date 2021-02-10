const authController = require("../db/controllers/authController");
const userController = require("../db/controllers/userController");
const listController = require("../db/controllers/listController");

class Router {
  constructor(express) {
    const router = express.Router();

    router.route("/signIn").post(authController.signUp);
    router.route("/signUp").post(authController.signIn);

    router.route("/user/:id").get(userController.getUserById);

    router.route("/list/:idList").get(listController.getListById);
    router.route("/lists/:idUser").get(listController.getAllList);
    router.route("/list/create/:idUser").post(listController.createNewList);
    router
      .route("/list/:idList/update/:idUser")
      .patch(listController.updateList);

    return router;
  }
}

module.exports = (express) => new Router(express);
