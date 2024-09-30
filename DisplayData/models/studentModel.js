const mongoose=require("mongoose")

const stuSchema=new mongoose.Schema({
    rollno:Number,
    name:String,
    age:Number,
    city:String
})

module.exports=mongoose.model("student",stuSchema)