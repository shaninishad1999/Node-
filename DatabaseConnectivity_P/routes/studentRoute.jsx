// const express=require("express")
// const route=express.Router();
// const StuController=require("../controllers/studentController")


// route.post("/studentsavedata",StuController.studentSaveData)




// module.exports=route

const express = require("express");
const route = express.Router();
const StuController = require("../controllers/studentController");

route.post("/studentsavedata", StuController.studentSaveData);

module.exports = route; // Fix: Corrected rout to route
