const empModel = require("../models/empModel")

const insert = (req, res) => {
    console.log(req.body)
     const { empId,empName,empAge,empCity, empSalary } = req.body;

     const employee=new empModel({
        empId:empId,
        empName:empName,
        empAge:empAge,
        empCity:empCity,
        empSalary:empSalary
        
     })
     employee.save();
     res.send("data succesfully insert")


}

const display=async(req,res)=>{
    const empData=await empModel.find();
   res.send(empData)
}


module.exports={
   insert,
   display
}