import express from "express";
import { getUsers, signIn, signUp } from "../controller/user.js";


const router = express.Router();

router.get("/", getUsers);

router.post("/signup",signUp);

router.post("/signin",signIn);

export default router;