const controller = require("../db/controllers/userController");

class Router {
  constructor(express) {
    const router = express.Router();

    router.route("/").post(controller.signUp);

    return router;
  }
}

module.exports = (express) => new Router(express);
