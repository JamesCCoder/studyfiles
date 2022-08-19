let express = require("express");

let app = express();

app.get("/", (req, res) =>{
    res.send("234");
})

app.post("/", (req, res) =>{
    
})

app.delete("/", (req, res) =>{
    
})
app.patch("/", (req, res) =>{
    
})
app.put("/", (req, res) =>{
    
})

app.listen(200, () => {
    console.log("the server is running!")
})