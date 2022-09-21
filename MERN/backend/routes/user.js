import express from "express";
import { getUsers, createUser } from "../controllers/user.js";


const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.post("/signin", (req, res) =>{
    const {username, password} = req.body;
    User.findOne()
})

export default router;