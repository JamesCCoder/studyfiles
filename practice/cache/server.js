import express from "express";
import dotenv from "dotenv";
import redis from "redis";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config({path:"config.env"});

const app = express();
const PORT = process.env.PORT || 7005;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

app.use(cors());
app.use(express.json());

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

const getRepo = async (req, res, next) =>{
    const { username } = req.params;
    const data = await fetch(`https://api.github.com/users/${username}`);
    const dataFormat = await data.json();
    const repo = dataFormat.public_repos;
    client.setex(username, 3600, repo);
    res.send(username);
}

app.get("/repo/:username", cache, getRepo);

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
})