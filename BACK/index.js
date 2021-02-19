const express = require("express"),
  bodyParser = require("body-parser");
require("dotenv").config();
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
var cors = require("cors");
class Application {
  constructor(express, bodyParser) {
    const app = express();
    var cors = require("cors");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    const router = require("./api/routes/router")(express);

    app.use("/api", cors(), router);

    app.listen(process.env.APP_PORT, () => {
      console.log(`server started on port : ${process.env.APP_PORT}`);
    });
  }
}

module.exports = new Application(express, bodyParser);
