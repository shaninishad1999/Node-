const mongoose = require("mongoose")


const stuSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    pincode: Number
})

module.exports = mongoose.model("student", stuSchema)