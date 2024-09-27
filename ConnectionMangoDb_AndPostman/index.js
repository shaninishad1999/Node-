const express=require("express")
const app=express();
const mongoose=require("mongoose")
const StuRoute=require("./routes/studentRoutes")


mongoose.connect("mongodb://127.0.0.1:27017/Shanideval").then()

app.use("/students",StuRoute)
app.listen(9000,()=>{
    console.log("server run on 9000")
})
