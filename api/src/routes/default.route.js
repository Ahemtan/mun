import express from "express";

import { rootHandler, notFound } from "../controller/root.controller.js";

const router = express.Router();

router.get("/", rootHandler);

export default router;