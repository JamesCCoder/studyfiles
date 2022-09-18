import express from "express";

import User from "../models/user.js";

const router = express.Router();

let users = [];

router.get("/", (req, res, next) =>{
    try{
       res.status(200).send(users);
    }catch(err){
        console.error(err);
        res.status(500).send({message:err.message});
    } 
})

router.post("/", (req, res, next) =>{
    try{

    }catch(err){
        console.error(err);
        res.status(500).send({message:err.message});
    }
})

router.get("/:firstName", (req, res, next) =>{
    try{

    }catch(err){
        console.error(err);
        res.status(500).send({message:err.message});
    }
})

router.delete("/:firstName", (req, res, next) =>{
    try{

    }catch(err){
        console.error(err);
        res.status(500).send({message:err.message});
    }
})