import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({path:"config.env"});

mongoose.connect(process.env.MONGO);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected"));

const app = express();

const PORT = process.env.PORT || 9000;

app.get("/", (req, res, next) =>{
    res.status(200).send("This is the main page");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})