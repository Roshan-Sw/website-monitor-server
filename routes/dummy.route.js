import express from "express";
import { createDummy } from "../controllers/dummy.js";
import { getAllDummies } from "../controllers/dummy.js";

const router = express.Router();

router.get("/get", getAllDummies);
router.post("/post", createDummy);

export default router;
