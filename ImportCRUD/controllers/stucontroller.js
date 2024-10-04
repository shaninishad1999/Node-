import stuModel from "../controllers/stucontroller.js"

class Stuctrl {

    static stuInfo = (req, res) => {
        res.send("this is student information page!!!!!!!!!!!!")
    }

    static stuInsert=async (req,res)=>{
        const {rollno,name,age,city}=req.body

        const data=await stuModel.create({
            rollno:rollno,
            name:name,
            age:age,
            city:city
        })
        res.send("data created")
    }
    

}

export default Stuctrl