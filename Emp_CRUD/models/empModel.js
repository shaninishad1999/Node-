const mongoose=require("mongoose")

const empSchema=new mongoose.Schema({
    empNo:Number,
    empName:String,
    empAge:Number,
    empCity:String,
    empSalary:Number,
    empPosition:String
})

module.exports=mongoose.model("employee",empSchema)