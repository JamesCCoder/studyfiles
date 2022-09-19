import express from "express";
import { createSignUp, getSignUp } from "../controllers/signUp.js";


const router = express.Router();

router.get("/", getSignUp);

router.post("/", createSignUp);

export default router;