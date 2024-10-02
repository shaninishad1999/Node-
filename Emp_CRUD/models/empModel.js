const mongoose=require("mongoose")

const empSchema=new mongoose.Schema({
    empNo:Number,
    empName:String,
    empAge:Number,
    empSalary:Number,
    empPosition:String
})

module.exports=mongoose.model("employee",empSchema)