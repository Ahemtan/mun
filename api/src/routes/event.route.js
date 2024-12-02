import express from "express";

import {
  createEventHandler,
  deleteEventHandler,
  getAllEventHandler,
  getEventHandler,
  updateEventHandler,
} from "../controller/event.controller.js";
import { privateRoute, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/api/event/", privateRoute, adminOnly, createEventHandler);
router.put("/api/event/:id", privateRoute, adminOnly, updateEventHandler);
router.delete("/api/event/:id", privateRoute, adminOnly, deleteEventHandler);
router.get("/api/event/filter/:id", privateRoute, getEventHandler);
router.get("/api/event/", getAllEventHandler);

export default router;
