const StuModel = require("../models/studentModel")
const stuInformation = (req, res) => {
  res.send("This is Student informatin we are cybrom")
}
const stuSaveData = (req, res) => {
  const { name, age, city } = req.body;
  const student=new StuModel({
    name:name,
    age:age,
    city:city
  })
  student.save();
  res.student("Data Submited Succesfully")
};
module.exports = {
  stuInformation,
  stuSaveData
}
