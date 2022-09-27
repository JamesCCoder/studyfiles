import express from "express";
import { check } from "express-validator";
import { auth } from "../controllers/verifyToken.js";

import { getUser, signup, signin } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUser);

router.post("/signup", [
    check("username","Name must be at least 3 characters").isLength({min:3}),
    check("password","Password must be at least 6 characters").isLength({min:6})
] ,signup);

router.post("/signin",[
    check("username","Name must be at least 3 characters").isLength({min:3}),
    check("password","Password must be at least 6 characters").isLength({min:6})
] ,signin);

router.get("/signin", auth, (req, res) =>{
    res.status(200).send("access");
})

export default router;