const express=require("express")
const route=express.Router();
const stuController=require("../controllers/studentController")



route.get("/stuSaveData",stuController.studSaveData)
route.get("/stuDisplay",stuController.stuDisplay)







module.exports=route