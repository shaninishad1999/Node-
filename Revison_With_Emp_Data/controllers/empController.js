const empModel = require("../models/empModel")

// insert data
const insert = (req, res) => {
   console.log(req.body)
   const { empId, empName, empAge, empCity, empSalary } = req.body;

   const employee = new empModel({
      empId: empId,
      empName: empName,
      empAge: empAge,
      empCity: empCity,
      empSalary: empSalary

   })
   employee.save();
   res.send("data succesfully insert")


}
// display data
const display = async (req, res) => {
   const empData = await empModel.find();
   res.send(empData)
}
// throw id search
const search = async (req, res) => {
   const { empId } = req.body;
   const empSearch = await empModel.find({ "empId": empId })
   console.log(empSearch)
   res.send(empSearch)
}

// emp search
const empsearch = async (req, res) => {
   const { name, city } = req.body;
   const empSearch = await empModel.find({$and: [{ empName: name }, { empCity: city }]});
   console.log(empSearch)
   res.send(empSearch)
}

module.exports = {
   insert,
   display, search,
   empsearch
}