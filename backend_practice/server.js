import express from "express";
import dotenv from "dotenv";


const app = express();

dotenv.config({path:"config.env"});

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res, next) =>{
    res.send("this is the main page");
})



app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}`);
})