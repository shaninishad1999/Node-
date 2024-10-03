const express = require("express")
const route = express.Router();
const empController = require("../controllers/empController")

route.post("/insertData", empController.empInsert)
route.post("/empDisplay", empController.empDisplay)
route.post("/empSearch", empController.empSearch)
route.post("/empNameAndCitybySerach", empController.empNameAndCitybySerach)
route.post("/empSearchByQuery", empController.empSearchByQuery)
route.post("/empSaveCreate", empController.empSaveCreate)


module.exports = route