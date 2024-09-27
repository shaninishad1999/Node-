const stuInfo=(req,res)=>{
    res.send("This is Student information page!!!!!")
}
const stuFees=(req,res)=>{
    res.send("This is Student Fees page!!!!!")
}
const stuResult=(req,res)=>{
    res.send("This is Student result page!!!!!")
}
const stuSubject=(req,res)=>{
    res.send("This is Student Subject page!!!!!")
}

module.exports={
    stuInfo,
    stuFees,
    stuResult,
    stuSubject
}