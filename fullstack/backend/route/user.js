import express from "express";
import { getUsers, signIn, signUp } from "../controller/user.js";
import {check} from "express-validator";

const router = express.Router();

router.get("/", getUsers);

router.post("/signup", [
   check("username", "username should be at least 3 characters").isLength({min:3}),
   check("password", "password should be at least 6 characters").isLength({min:6}),
],signUp);

router.post("/signin", [
   check("username", "username should be at least 3 characters").isLength({min:3}),
   check("password", "password should be at least 6 characters").isLength({min:6}),
],signIn);

export default router;