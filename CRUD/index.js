const express = require("express")
const app = express();
const empRoutes = require("./routes/empRoute");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/CRUD").then(() => {
    console.log("Database Connected Succesfully")
})



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/employee", empRoutes)

app.listen(9000, () => {
    console.log("server is running on port 9000")
})