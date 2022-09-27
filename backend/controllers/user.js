import User from "../models/user.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export const getUser = async (req, res, next) =>{
   const users = await User.find();
   res.status(200).send({
    message:"all",   
    users
    });
}

export const signup = async (req, res, next) =>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).send({
           error:errors.array()[0].msg,
       })
   }
   const usernameExist = await User.findOne({username: req.body.username});
   if(usernameExist) return res.status(400).send("username exists");

   const saltPassWord = await bcrypt.genSalt(10);
   const securePassWord = await bcrypt.hash(req.body.password, saltPassWord);
   const newUser = new User({
       username: req.body.username,
       password: securePassWord,
   })
   const newUserSave = await newUser.save();
   res.status(200).send({
    message:"success",   
    newUserSave
    });
}

export const signin = async (req, res) =>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).send({
           error:errors.array()[0].msg,
       })
   }
   const user = await User.findOne({username: req.body.username});
   if(!user) return res.status(400).send("username is not found");

   const validPass = await bcrypt.compare(req.body.password, user.password);
   if(!validPass) return res.status(400).send("Invalid password");

   const token = jwt.sign({_id:user._id}, process.env.TOKEN);
   res.header("auth-token", token).send(token);
}

