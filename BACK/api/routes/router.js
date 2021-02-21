const authController = require("../db/controllers/authController");
const userController = require("../db/controllers/userController");
const listController = require("../db/controllers/listController");
const taskController = require("../db/controllers/taskController");
const columnController = require("../db/controllers/columnController");
class Router {
  constructor(express) {
    const router = express.Router();
    //users
    router.route("/signUp").post(authController.signUp);
    router.route("/signIn").post(authController.signIn);

    router.route("/user/:id").get(userController.getUserById);
    //lists
    router.route("/list/:idList").get(listController.getListById);
    router.route("/:idUser/lists").get(listController.getAllList);
    router.route("/:idUser/list/create").post(listController.createNewList);
    router
      .route("/list/:idList/update/:idUser")
      .patch(listController.updateList);
    router
      .route("/list/:idList/delete/:idUser")
      .delete(listController.deleteList);
    //column
    router.route("/:idList/columns").get(columnController.getAllColumns);

    //tasks
    router.route("/:idTask/task").get(taskController.getTaskById);
    router.route("/:idList/tasks").get(taskController.getAllTask);
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
