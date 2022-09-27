import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import router from "./routes/user.js";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => console.log("connected"))
.catch((error) => console.error(error));
// const db = mongoose.connection;
// db.once("open", () => console.log("mongo connected"));
// db.on("error", error => console.error(error));

const app = express();
const PORT = process.env.PORT || 8090;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.get("/", (req, res, next) =>{
    res.status(200).send("This is the main page");
})

app.use("/user", router);

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
})