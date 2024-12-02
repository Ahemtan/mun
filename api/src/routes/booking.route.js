import express from "express";

import {
    createBookingHandler
} from "../controller/booking.controller.js";
import { privateRoute, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/api/bookings/", privateRoute, createBookingHandler);

export default router;
