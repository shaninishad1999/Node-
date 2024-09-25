const express = require("express");

const app = express();

const studentRoutes = require("./routes/studentroutes");
const teacherroute =require("./routes/teachersRoutes")


app.use("/students", studentRoutes);
app.use("/teacher", teacherroute);


app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
