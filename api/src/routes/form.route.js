import express from "express";

import {
    createFormHandler,
    getFormByUserId
} from "../controller/form.controller.js";
import { privateRoute, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/api/form/", privateRoute, createFormHandler);
router.get("/api/form", privateRoute, getFormByUserId);

export default router;
