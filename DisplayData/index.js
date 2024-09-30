const express=require("express")
const app=express();
const mongoose=require("mongoose")
const StuRoute=require("./routes/studentRoute")
const bodyParser=require("body-parser")


mongoose.connect("mongodb://127.0.0.1:27017/displayTable").then(()=>{
    console.log("server is connected")

})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/students",StuRoute)



app.listen(9000,()=>{
    console.log("server is running on port 9000")
})
