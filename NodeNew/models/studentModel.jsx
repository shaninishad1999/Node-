const mongoose=require("mongoose")

const stuSchema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String
})


module.exports=mongoose.Schema("student",stuSchema)