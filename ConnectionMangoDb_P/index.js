const express =require("express")
const app=express();
const mongoose=require("mongoose")
const StuRoute=require("./routes/studentsRoutes")

mongoose.connect("mongodb://127.0.0.1:27017/MyTable").then()

app.use("/students",StuRoute)

app.listen(9000,()=>{
    console.log("Server is running on 9000")
})