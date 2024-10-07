const express = require("express")
const app = express();





//app handler
app.get("/about", (req, res,next) => {
    console.log("about console")
    res.send("About  page!!!!!!!!!!!!")
    next()

})

// middleware 
app.use("/", (req, res, next) => {
    console.log("This is root functionality 2")
    // res.send("Next page")
    next()
})
// middleware 
app.use("/", (req, res, next) => {
    console.log("This is root functionality 3")
    // res.send("Next page")
    next()
})


app.listen(9000, () => {
    console.log("Server is running on port 9000")
})




