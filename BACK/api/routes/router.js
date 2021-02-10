const authController = require("../db/controllers/authController");
const userController = require("../db/controllers/userController");
const listController = require("../db/controllers/listController");
const taskController = require("../db/controllers/taskController");
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
    router
      .route("/list/:idList/delete/:idUser")
      .delete(listController.deleteList);

    router.route("/task/:idTask").get(taskController.getTaskById);
    router.route("/task/:idTask").get(taskController.getAllTask);
    router.route("/task/create/:idUser").post(taskController.createNewTask);
    router
      .route("/task/:idTask/update/:idUser")
      .patch(taskController.updateTask);
    router
      .route("/task/:idTask/delete/:idUser")
      .delete(taskController.deleteTask);
    return router;
  }
}

module.exports = (express) => new Router(express);
