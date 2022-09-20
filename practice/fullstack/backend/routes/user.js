import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", async (req, res, next) =>{
    const allUsers = await User.find();
    res.status(200).send(allUsers);
})

router.post("/", async (req, res, next) =>{
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);

    const oneUser = new User({
        username: req.body.username,
        password: securePassword,
    })
    const oneUserSigned = await oneUser.save();
    res.status(200).send(oneUserSigned);
})

export default router;