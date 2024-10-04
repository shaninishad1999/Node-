import express from "express"
const route=express.Router();
import Stuctrl from "../controllers/stucontroller.js";



route.get("/stuinfo",Stuctrl.stuInfo)
route.get("/stuinsert",Stuctrl.stuInsert)


export default route
