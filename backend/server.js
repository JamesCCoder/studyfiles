const express = require("express");
const redis = require("redis");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.nextTick.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

const sendResponse = (username, names) =>{
    return `<h2>${username} has a name: ${names}</h2>`;
}

const getRepos = async (req, res, next) =>{
    const {username} = req.params;
    const data = await fetch(`https://api.github.com/users/${username}`);
    const dataFormat = await data.json();

    const names = dataFormat.name;
    client.setex(username, 3600, names);
    res.send(sendResponse(username, names));
} 

app.get("/repos/:username", getRepos);



app.listen(5000, () =>{
    console.log(`The server is running on ${PORT}`);
})