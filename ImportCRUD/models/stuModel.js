import mongoose from "mongoose";

const stuSchema=new mongoose.Schema({
    rollno:Number,
    name:String,
    age:Number,
    city:String
})

const stuModel=mongoose.model("student",stuSchema)
export default stuModel