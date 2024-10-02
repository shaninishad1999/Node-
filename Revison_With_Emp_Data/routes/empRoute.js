const express = require("express");
const route = express.Router();
const empController = require("../controllers/empController");

route.post("/insert", empController.insert);
route.get("/display", empController.display);
route.post("/search", empController.search);
route.post("/search", empController.search);
route.post("/empSearchboth", empController.empsearch);


module.exports = route;
