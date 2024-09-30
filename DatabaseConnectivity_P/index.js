
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const StuRoute = require("./routes/studentRoute");

const bodyParser = require("body-parser"); // Fix: Corrected bodyPerser to bodyParser

mongoose.connect("mongodb://127.0.0.1:27017/PracticeTable")
    .then(() => {
        console.log("Database is connected");
    })
    
app.use(bodyParser.json()); // Fix: Corrected bodyPerser to bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/students", StuRoute);

app.listen(9000, () => {
    console.log("Server is running on port 9000");
});

