import express from "express";
import { getUsers, createUser, signIn } from "../controller/user.js";
import { check } from "express-validator";

const router = express.Router();

router.get("/", getUsers);

router.post("/signup",[
   check("username", "username must be at least 3 characters").isLength({min:3}),
   check("password", "password must be at least 6 characters").isLength({min:6}),
], createUser);

router.post("/signin",[
   check("username", "username must be at least 3 characters").isLength({min:3}),
   check("password", "password must be at least 6 characters").isLength({min:6}),
], signIn);

export default router;