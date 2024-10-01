const StuModel = require("../models/studentModel")


const studSaveData = (req, res) => {
    const { name, age, city, pincode } = req.body;

    const student = new StuModel({
        name: name,
        age: age,
        city: city,
        pincode: pincode
    })
    student.save();
    res.send("Data save successfully")
}

const stuDisplay=async(req,res)=>{
    const studata = await StuModel.find();
    res.send(studata)
   
}

module.exports = {
    studSaveData,
    stuDisplay
}