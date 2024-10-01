const express=require("express");
const app=express();
const mongoose=require("mongoose")
const stuRoute=require("./routes/studentRoute")
const bodyParser=require("body-parser")


mongoose.connect("mongodb://127.0.0.1:27017/TestTableNew").then(()=>{
    console.log("database connected succesfully")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/students",stuRoute)




app.listen(9000,()=>{
    console.log("server is running on port 9000")
})