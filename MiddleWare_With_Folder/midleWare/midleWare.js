

const myName = (req, res, next) => {
    console.log("This is app level meddleware!!")
    req.myName = "Shanideval";
    next()
}

module.exports=myName