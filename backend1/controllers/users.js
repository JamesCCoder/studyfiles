import redis from "redis";

const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);

let users = [];

export const getUser = (req, res, next) =>{
    res.send(users);
}

export const addUser = (req, res, next) =>{
    const user = req.body;
    users.push(user);
    res.send(`${user.firstName} has been added`);

    client.setex("firstName", 3600, user.firstName);
}

export const getOneUser = (req, res, next) =>{
    const {firstName} = req.params;
    const myUser = users.find(user => user.firstName === firstName);
    res.send(myUser);
}


export const deleteOneUser = (req, res, next) =>{
    const {firstName} = req.params;
    users = users.filter(user => user.firstName !== firstName);
    res.send(`${firstName} deleted`);
}




