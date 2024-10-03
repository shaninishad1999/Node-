const EmpModel = require("../mdoels/empModel")


const empInsert = (req, res) => {
    const { empNo, empName, empCity, empSalary } = req.body;

    const employee = new EmpModel({
        empNo: empNo,
        empName: empName,
        empCity: empCity,
        empSalary: empSalary

    })
    employee.save();
    res.send("Data Save Successfully")

}
const empDisplay = async (req, res) => {
    const storeData = await EmpModel.find()
    res.send(storeData)
}

const empSearch = async (req, res) => {
    const { empNo } = req.body
    const storeSearch = await EmpModel.find({ "empNo": empNo })
    res.send(storeSearch)
}

const empNameAndCitybySerach = async (req, res) => {
    const { empName, empCity } = req.body
    const storeempNameAndCitybySerach = await EmpModel.find({ $and: [{ "empName": empName }, { "empCity": empCity }] })
    res.send(storeempNameAndCitybySerach)
}

const empSearchByQuery = async (req, res) => {
    const { empName, empCity } = req.query;
    const queryData = await EmpModel.find({ $and: [{ "empName": empName }, { "empCity": empCity }] })
    res.send(queryData);
    console.log(queryData);
}
// latest method to create database and send data
const empSaveCreate = async (req, res) => {
    const {
        empNo, empName, empCity, empSalary, } = req.body
    const MyData = EmpModel.create({
        empNo: empNo,
        empName: empName,
        empCity: empCity,
        empSalary: empSalary,

    })
    res.send("data send by created method")
}

module.exports = {
    empInsert, empDisplay, empSearch, empNameAndCitybySerach, empSearchByQuery, empSaveCreate
}