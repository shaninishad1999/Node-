// const mongoose=require("mongoose")

// const stuSchema=new mongoose.Schema({
//     name:String,
//     age:Number,
//     city:String
// })


// module.exports=mongoose.model("student",stuSchema)

const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

module.exports = mongoose.model("student", stuSchema);
