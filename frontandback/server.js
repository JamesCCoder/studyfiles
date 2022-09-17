import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/user.js";

dotenv.config({path:"config.env"});

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error",(error) => console.error(error));
db.once("open", () => console.log("connected"));

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res, next) =>{
    res.send("This is the main page");
})

app.use("/user", router);

app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}`);
})