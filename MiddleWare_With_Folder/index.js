const express = require("express")
const app = express();
const midleware=require("./midleWare/midleWare")



// const myName = (req, res, next) => {
//     console.log("This is app level meddleware!!")
//     req.myName = "Shanideval";
//     next()
// }

app.use(midleware)

app.get("/", (req, res) => {
    console.log("Home Page")
    console.log(req.myName)
    res.send("Hello Home Page!!!!!!! " + req.myName)
})


app.listen(9000, () => {
    console.log("server is running on port 9000")



})