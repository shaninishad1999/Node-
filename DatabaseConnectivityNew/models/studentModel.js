const mongoose=require("mongoose")
const stuSchema=new mongoose.Schema({
    name:String,
    age:Number,
    rollno:Number,
    city:String,
    state:String    

})
module.exports=mongoose.model("student",stuSchema);