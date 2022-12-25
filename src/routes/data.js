const { Router } = require("express");
const { getData } = require("../controllers/data.controller");
const DataRouter = Router();

DataRouter.get("/", getData);

module.exports = DataRouter;
