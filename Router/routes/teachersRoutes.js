const express = require("express");
const route = express.Router();

route.get("/teacherinfo", (req, res) => {
    res.send("<h1>Teacher Information page</h1>");
})

route.get("/teachersubject", (req, res) => {
    res.send("<h1>Teacher Subject page</h1>");
})

route.get("/teachedepartment", (req, res) => {
    res.send("<h1>Teacher Department page</h1>");
})

route.get("/teachersalary", (req, res) => {
    res.send("<h1>Teacher Salary page</h1>");
})

module.exports = route;
