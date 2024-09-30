const StuModel = require("../models/studentModel")

const stuinfo = (req, res) => {
    res.send("this is information page")

}

const saveData = (req, res) => {
    const { rollno, name, age, city } = req.body;

    const student = new StuModel({
        rollno: rollno,
        name: name,
        age: age,
        city: city
    })
    student.save();
    res.send("data send succesfully")
}
const studentDisplay = async (req, res) => {
    const studata = await StuModel.find();
    res.send(studata)
}

module.exports = {
    stuinfo,
    saveData,
    studentDisplay
}
