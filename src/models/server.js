const express = require("express");
const CORS = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
  }

  middlewares() {
    this.app.use(CORS());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api", require("../routes/data"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  start() {
    this.middlewares();
    this.routes();
    this.listen();
  }
}

module.exports = Server;
