const express =require("express")
const app=express();
const mongoose=require("mongoose")
const bodyParser = require("body-parser");
const StuRoute=require("./route/studentRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/MyTableNew").then(()=>{
    console.log("Data Succesfully connected")
})

app.use("/students",StuRoute)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.listen(9000,()=>{
    console.log("Server is running on 9000")
})