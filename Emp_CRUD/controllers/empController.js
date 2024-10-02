const empModel = require("../models/empModel")



const empInsert = (req, res) => {
    const { empNo, empName, empAge, empSalary, empPosition } = req.body;

    const employee = new empModel({
        empNo: empNo,
        empName: empName,
        empAge: empAge,
        empSalary: empSalary,
        empPosition: empPosition
    })
    employee.save();
    res.send("Data Save Successfully")

}
const empDisplay = async (req, res) => {
    const storeData = await empModel.find()
    res.send(storeData)
}

const empSearch = async (req, res) => {
    const { empNo } = req.body
    const storeSearch = await empModel.find({ "empNo": empNo })
    res.send(storeSearch)
}

const empNameAndAgebySerach = async (req, res) => {
    const { empName, empAge } = req.body
    const storeempNameAndAgebySerach = await empModel.find({ $and: [{ "empName": empName }, { "empAge": empAge }] })
    res.send(storeempNameAndAgebySerach)
}

module.exports = {
    empInsert, empDisplay, empSearch, empNameAndAgebySerach
}