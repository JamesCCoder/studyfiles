const express = require("express");
const path = require("path");

const app = express();


app.get("/", (req, res) =>{
    res.send("This is a get");
})
app.post("/", (req, res) =>{
    res.send("This is a post");
})
app.put("/", (req, res) =>{
    res.send("This is a put");
})
app.patch("/", (req, res) =>{
    res.send("This is a patch");
})
app.delete("/", (req, res) =>{
    res.send("This is a delete");
})


app.listen(2000, () =>{
    console.log("server is running!");
})