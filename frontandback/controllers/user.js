import Users from "../models/user.js";

export const getUser = async (req,res,next) =>{
    try{
         const users = await Users.find();
         res.status(200).send(users);
    }catch (err){
         res.status(500).json({message:err.message})
    }   
}

export const createUser = (req,res,next) =>{
    const user = req.body;
    users.push(user);
    res.send(`${user.firstName} has been added`);
}

export const getOneUser = (req,res,next) =>{
    const { firstName } = req.params;
    const myUser = users.find(user => user.firstName === firstName);
    res.send(myUser);
}

export const deleteOneUser = (req,res,next) =>{
    const { firstName } = req.params;
    users = users.filter(user => user.firstName !== firstName);
    res.send(`${firstName} has been removed`);
}