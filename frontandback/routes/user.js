import express from "express";
import {createUser, getUser, getOneUser, deleteOneUser} from "../controllers/user.js";


const router = express.Router();


router.get("/", getUser);

router.post("/", createUser);

router.get("/:firstName", getOneUser);

router.delete("/:firstName", deleteOneUser);

export default router;