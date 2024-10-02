const express=require("express")
const route=express.Router();
const empController=require("../controllers/empController")

route.post("/empinsert",empController.empInsert)
route.post("/empDisplay",empController.empDisplay)
route.post("/empSearch",empController.empSearch)
route.post("/empNameAndAgebySerach",empController.empNameAndAgebySerach)

module.exports=route