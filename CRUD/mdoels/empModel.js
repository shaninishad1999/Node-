const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    empNo: Number,
    empName: String,
    empCity: String,
    empSalary: Number
})

module.exports = mongoose.model("employee", empSchema)