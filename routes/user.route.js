import express from "express";
import { createUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create-user", createUser);

export default router;
