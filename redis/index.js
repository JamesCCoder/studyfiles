const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);


const app = express();

app.get("/repos/:username", getRepos);


app.listen(5000, () =>{
    console.log(`App is listening on port ${PORT}`);
})

function setResponse(username, repos){
    return `<h2>${username} has ${repos} Github repos</h2>`
}

async function getRepos(req, res, next){
    try{
        console.log("Fetching...");
        
        const {username} = req.params;
        const response =  await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        
        const repos = data.public_repos;
        client.setex(username, 3600, repos);


        res.send(setResponse(username,repos));
        

    }catch(err){
       console.error(err);
       res.status(500);
    }
}

