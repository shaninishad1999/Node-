const empModel = require("../models/empModel")



const empInsert = (req, res) => {
    const { empNo, empName, empAge,empCity, empSalary, empPosition } = req.body;

    const employee = new empModel({
        empNo: empNo,
        empName: empName,
        empAge: empAge,
        empCity:empCity,
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

const empNameAndCitybySerach = async (req, res) => {
    const { empName, empCity } = req.body
    const storeempNameAndCitybySerach = await empModel.find({ $and: [{ "empName": empName }, { "empCity": empCity }] })
    res.send(storeempNameAndCitybySerach)
}

const empSearchByQuery = async (req, res) => {
    const { empName, empCity } = req.query;
    const queryData =  await empModel.find({ $and: [{ "empName": empName }, { "empCity": empCity }] })
    res.send(queryData);
    console.log(queryData);
}

const empSaveCreate = async (req, res) => {
    const {
        empNo, empName, empAge,empCity, empSalary, empPosition } = req.body
    const MyData = empModel.create({
        empNo: empNo,
        empName: empName,
        empAge: empAge,
        empCity:empCity,
        empSalary: empSalary,
        empPosition: empPosition
    })
    res.send("data send by created method")
}

module.exports = {
    empInsert, empDisplay, empSearch, empNameAndCitybySerach , empSearchByQuery, empSaveCreate
}