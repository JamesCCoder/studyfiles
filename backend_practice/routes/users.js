import express from "express";
import { getUser, getOneUser, deleteOneUser, createUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUser);

router.post("/", createUser);

router.get("/:firstName", getOneUser);

router.delete("/:firstName", deleteOneUser);

export default router;