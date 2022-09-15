import express from "express";
import router from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/",(req, res, next) =>{
    res.send("this is main page");
})

app.use("/users", router);

app.listen(PORT,() =>{
    console.log(`The server is running on ${PORT}`);
})