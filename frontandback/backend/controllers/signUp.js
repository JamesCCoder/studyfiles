import bcrypt from "bcrypt";
import SignUp from "../models/signUp.js";
import redis from "redis";

const client = redis.createClient(process.env.REDIS_PORT);

export const getSignUp = async (req, res, next) =>{
    const signups = await SignUp.find();
    res.status(200).send(signups);
}

export const createSignUp = async (req, res, next) =>{
    const saltPassWord = await bcrypt.genSalt(10);
    const securePassWord = await bcrypt.hash(req.body.password, saltPassWord);

    const newSignUp = new SignUp({
        username:req.body.username,
        password:securePassWord,
    })

    const newSign = await newSignUp.save();
    res.status(200).send(newSign);

    client.setex("username", 3600, newSign.username);
}