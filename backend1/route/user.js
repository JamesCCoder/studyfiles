import express from "express";
import User from "../model/user.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", async (req, res, next) =>{
    const users = await User.find();
    res.status(200).send(users);
})

router.post("/signin", async (req, res, next) =>{
   const saltPassword = await bcrypt.genSalt(10);
   const securePassword = await bcrypt.hash(req.body.password, saltPassword); 
   const newUser = new User({
       username:req.body.username,
       password:securePassword,
   })
   const newUserSave = await newUser.save();
   res.status(200).send(newUserSave);
})

router.post("/signup", async (req, res, next) =>{
   const user = await User.findOne({username: req.body.username});
   if(!user) return res.status(400).send("invalid user");
   const passValid = await bcrypt.compare(req.body.password, user.password);
   if(!passValid) return res.status(400).send("invalid password");
   res.send("pass");
})

export default router;