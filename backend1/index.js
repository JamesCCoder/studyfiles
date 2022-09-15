import express from "express";
import router from "./routes/users.js";



const app = express();
const PORT = 5000;


app.use(express.json());

app.get("/", (req, res) =>{
    res.send("This is main page");
})

app.use("/users",router);

app.listen(PORT, (res, req) =>{
    console.log(`The server is running on ${PORT}`);
})