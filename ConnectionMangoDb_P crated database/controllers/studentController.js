const StuModel = require("../models/studentModel")

const stuInformation = (req, res) => {
    res.send("This is Student informatin we are cybrom")
}

const studataSave = (req, res) => {
    const { name,age,rollno,city,state }=req.body;


    const student=new StuModel({
        name:name,
        age:age,
        rollno:rollno,
        city:city,
        state:state
    })
    student.save();
    res.send("Data succesfully Save")
}
module.exports = {
    stuInformation,
    studataSave
}


