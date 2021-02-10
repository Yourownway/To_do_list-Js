const express = require("express"),
  bodyParser = require("body-parser");
require("dotenv").config();

class Application {
  constructor(express, bodyParser) {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    const router = require("./api/routes/router")(express);

    app.use("/api", router);

    app.listen(process.env.APP_PORT, () => {
      console.log(`server started on port : ${process.env.APP_PORT}`);
    });
  }
}

module.exports = new Application(express, bodyParser);
