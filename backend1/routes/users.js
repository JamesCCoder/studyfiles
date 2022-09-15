import express from "express";

import {addUser, getUser, getOneUser, deleteOneUser} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUser);

router.post("/", addUser);

router.get("/:firstName", getOneUser);

router.delete("/:firstName", deleteOneUser);

export default router;