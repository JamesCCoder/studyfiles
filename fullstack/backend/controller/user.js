import User from "../model/user.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

export const getUsers = async(req, res, next) =>{
   const users = await User.find();
   res.status(200).send(users);
}

export const signUp = async (req, res, next) =>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(401).send({
           error: errors.array()[0].msg,
       })
   }
   const saltPassWord = await bcrypt.genSalt(10);
   const securePassWord = await bcrypt.hash(req.body.password, saltPassWord);
   const newUser = new User({
       username:req.body.username,
       password:securePassWord,
   })
   const newUserSave = await newUser.save();
   res.status(200).send(newUserSave);
}

export const signIn = async (req, res, next) =>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(401).send({
           error: errors.array()[0].msg,
       })
   }
   const user = await User.findOne({username: req.body.username});
   if(!user) return res.status(400).send("username does not exist");
   const passValid = await bcrypt.compare(req.body.password, user.password);
   if(!passValid) return res.status(400).send("this is a invalid password");
   res.status(200).send("pass!");
   console.log("pass");
}