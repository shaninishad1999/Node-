import express from "express"
const app=express();
import studentRoutes from "./routes/stuRoute.js"
import bodyParser from "body-parser";
import mongoose from "mongoose";
app.use("/students",studentRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/ImportCRUD").then(()=>{
    console.log("database connected succesfully")
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.listen(9000,()=>{
    console.log("Server is running on port 9000")
})