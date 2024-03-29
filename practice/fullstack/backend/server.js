import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/user.js";

dotenv.config({path:"config.env"});

mongoose.connect(process.env.MONGO);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("mongo connected"));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.get("/", (req, res, next) =>{
    res.status(200).send("This is the main page");
})

app.use("/user", router);

app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}`);
})