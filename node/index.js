const express = require("express");
const path = require("path");
const { people } = require("./data.js");
const test = require("./middleware/test.js");
const authorize = require("./middleware/authorize.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
// app.use(test);

app.get("/",(req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "public/main.html"))
})

// app.get("/login", (req, res) => {
//     console.log(req.body);
//     res.status(200).send("GET");
// })
app.post("/login", (req, res) => {
    const {name} = req.body;
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }else{
        res.status(401).send("please provide credentials");
    }
    
})

app.get("/data", (req, res) => {
    const newPeople = people.map((person) => {
          const {id, name} = person;
          return {id, name};
    })

    res.status(200).send({success: true, data: newPeople});
})

app.post("/data", (req, res) => {
    res.status(201).send("Successful!");
})

app.get("/data/:personID", (req, res) => {
    const {personID} = req.params;
    const onePerson = people.find((people) => {
        return people.id === Number(personID);
    }) 
    res.status(200).send(onePerson);
})

app.get("/data/v1/query", (req, res) => {
    let sortedPeople = [...people];
    let {limit, search} = req.query;
    if(search){
        sortedPeople = sortedPeople.filter((person) => {
            return person.name.startsWith(search);
        })
    }
    if(limit){
        sortedPeople = sortedPeople.slice(0, Number(limit));
    }
    res.status(200).json(sortedPeople);
})

app.all("*", (req, res) => {
    res.status(404).send("404 not found");
})

app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`);
})
