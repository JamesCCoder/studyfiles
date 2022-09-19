// https://api.github.com/users/${username}
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config({path:"config.env"});

const app = express();
const PORT = process.env.PORT || 7003;

app.use(express.json());
app.use(cors());

const getRepo = async (req, res, next) =>{
   const {username} = req.params;
   const data = await fetch(`https://api.github.com/users/${username}`);
   const dataFormat = await data.json();
   const repo = dataFormat.public_repos;
   res.send(username);
}

const cache = (req, res, next) =>{
   const {username} = req.params;
}

app.get("/:username", getRepo);

app.listen(PORT, () =>{
    console.log(`The server in running ${PORT}`);
})