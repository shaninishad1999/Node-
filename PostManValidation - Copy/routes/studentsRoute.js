const express = require("express")
const route=express.Router()
const StuController=require("../Controllers/studentControllers")



route.get("/stuinfo",StuController.stuInfo)
route.get("/stufees",StuController.stuFees)
route.get("/sturesult",StuController.stuResult)
route.get("/stusubject",StuController.stuSubject)

module.exports=route