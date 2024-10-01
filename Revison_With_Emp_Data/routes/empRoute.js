const express = require("express");
const route = express.Router();
const empController = require("../controllers/empController");

route.post("/insert", empController.insert);
route.get("/display", empController.display);

module.exports = route;
