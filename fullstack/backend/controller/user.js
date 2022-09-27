import User from "../model/user.js"
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

export const getUsers = async(req, res, next) =>{
    const users = await User.find();
    res.status(200).send(users);
}

export const createUser = async(req, res, next) =>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).send({
           error:errors.array()[0].msg,
       })
   }
   
   const saltPassword = await bcrypt.genSalt(10);
   const securePassword = await bcrypt.hash(req.body.password, saltPassword); 
   const newUser = new User({
       username: req.body.username,
       password: securePassword,
   })
   const newUserSave = await newUser.save();
   res.status(200).send({
       message:"successful",
       newUserSave
    });
}

export const signIn = async (req, res, next) =>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).send({
           error:errors.array()[0].msg,
       })
   }
   const user = await User.findOne({username:req.body.username});
   if(!user) return res.status(400).send("username is invalid");
   const passValid = await bcrypt.compare(req.body.password, user.password);
   if(!passValid) return res.status(400).send("password is invalid");
   res.status(200).send("pass");
}