import User from "../models/user.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res, next) =>{
    const users = await User.find();
    res.status(200).send(users);
}

export const createUser = async (req, res, next) =>{
    const saltPassWord = await bcrypt.genSalt(10);
    const securePassWord = await bcrypt.hash(req.body.password, saltPassWord);
    const newUser = new User({
        username: req.body.username,
        password: securePassWord,
    })
    const newUserRegister = await newUser.save();
    res.status(200).send(newUserRegister);
}

export const signinUser = (req, res) =>{
    
}
