const express = require("express")
const app = express();
const mongoose = require("mongoose")
require("dotenv").config();
const port = process.env.PORT || 3000
mongoose.connect(process.env.DATABASE_STRING).then(() => {
    console.log("database connected")
})

app.get("/", (req, res) => {
    res.send("Hello!!!  " + process.env.SECRETE_KEY)
})

app.listen(port, () => {
    console.log(`server run on ${port}`)
})