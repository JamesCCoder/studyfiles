import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./route/user.js";

dotenv.config();

mongoose.connect(process.env.MONGO);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("mongo connected"));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res, next) =>{
    res.status(200).send("This is the main page");
})

app.use("/user", router);

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
})