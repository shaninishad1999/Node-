const express=require("express")
const app=express();
const empRoute=require("./routes/empRoute");
const bodyParser = require("body-parser");
const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/empCRUD").then(()=>{
    console.log("Database Connected Succesfully")
})



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/employee",empRoute)

app.listen(9000,()=>{
    console.log("server is running on port 9000")
})