import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_STRING).then(() => {
    console.log("Database connected");
})

app.get("/", (req, res) => {
    res.send(`Hello!!! ${process.env.SECRETE_KEY}`);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
