import express from "express";
import dotenv from "dotenv";
import redis from "redis";
import fetch from "node-fetch";
import cors from "cors";

dotenv.config({path:"config.env"});

const app = express();
const PORT = process.env.PORT || 7001;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

app.use(cors());
app.use(express.json());


app.get("/", (req, res) =>{
    res.status(200).send("This is the main page");
})

const cache = (req, res, next) =>{
    const { username } = req.params;
    client.get(username, (err, data) =>{
        if(err) throw err;
        if(data !== null){
            res.send(username);
        }else{
            next();
        }
    })
}

const getRepos = async (req, res, next) =>{
     const { username} = req.params;
     const response = await fetch(`https://api.github.com/users/${username}`);
     const data = await response.json();
     const repos = data.public_repos;
     client.setex(username, 3600, repos);
     res.send(username);
}

app.get('/repos/:username', cache, getRepos);

app.listen(PORT, () =>{
    console.log(`Server in running on ${PORT}`);
})