// const stuModel=require("../models/studentModel")


// const studentSaveData=(req,res)=>{
//     const {name,age,city}=req.body;

//     const student=new stuModel({
//         name:name,
//         age:age,
//         city:city
//     })


//     student.save()
//     res.send("data save succesfully")
// }

// module.exports={
//     studentSaveData
// }

const stuModel = require("../models/studentModel");

const studentSaveData = (req, res) => {
    const { name, age, city } = req.body;

    const student = new stuModel({
        name: name,
        age: age,
        city: city
    });

    student.save()
        .then(() => {
            res.send("Data saved successfully");
        })
        .catch((error) => {
            res.status(500).send("Error saving data: " + error);
        });
};

module.exports = {
    studentSaveData
};
