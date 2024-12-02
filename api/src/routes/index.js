import express from "express";

import users from "./user.route.js";
import root from "./default.route.js";
import event from "./event.route.js";
import booking from "./booking.route.js";

const router = express.Router();

router.use(users);
router.use(root);
router.use(event);
router.use(booking);

export default router;