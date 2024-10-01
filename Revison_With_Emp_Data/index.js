const express = require("express");
const app = express();
const mongoose = require("mongoose");
const empRoute = require("./routes/empRoute");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/EmpTable").then(() => {
    console.log("Database connected successfully");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/employee", empRoute);

app.listen(9000, () => {
    console.log("server run on port 9000");
});
