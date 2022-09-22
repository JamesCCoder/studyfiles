import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", async (req, res, next) =>{
    const users = await User.find();
    res.status(200).send(users);
})

router.post("/", async (req, res, next) =>{
    const saltPassWord = await bcrypt.genSalt(10);
    const securePassWord = await bcrypt.hash(req.body.password, saltPassWord);
    const oneUser = new User({
        username: req.body.username,
        password: securePassWord,
    })
    const oneUserRegister = await oneUser.save();
    res.status(200).send(oneUserRegister);
})

export default router;