const express=require("express")
const app=express();

const StuRoute=require("./routes/studentsRoute")

app.use("/students",StuRoute)
app.listen(8080,()=>{
    console.log("server run on 8080")
})