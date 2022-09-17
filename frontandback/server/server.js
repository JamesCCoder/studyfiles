import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/api", (req, res) =>{
    res.json({"users":["userOne","userTwo","userThree"]});
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`);
})