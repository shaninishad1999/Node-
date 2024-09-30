const express=require("express")
const route=express.Router();
const Stucontroller=require("../controllers/studentController")


route.get("/stuinfo",Stucontroller.stuinfo)
route.get("/savedata",Stucontroller.saveData)
route.get("/display",Stucontroller.studentDisplay)



module.exports=route