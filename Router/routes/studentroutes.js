const express = require("express")

const route = express.Router()

route.get("/studinfo", (req, res) => {
    res.send("<h1>Student Information</h1>");
})

route.get("/stufess", (req, res) => {
    res.send("<h1>Student Fees</h1>");
})

route.get("/sturesult", (req, res) => {
    res.send("<h1>Student Results</h1>");
})

route.get("/stusubject", (req, res) => {
    res.send("<h1>Student Subject</h1>");
})

module.exports = route;
