const mongoose=require("mongoose")

const empSchema=new mongoose.Schema({
    empId:String,
    empName:String,
    empAge:Number,
    empCity:String,
    empSalary:Number
})



module.exports=mongoose.model("employee",empSchema)